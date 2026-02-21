import React, { useReducer } from "react";
import {type Profile } from "../types/Profile";
type ProfileFormProps = {
    onSave:(profile: Profile) => void;
}
type FormState = {
    name: string;
    email: string;
    error: string | null;
    success: string | null;
    isSubmitting: boolean;
}
type FormAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "SET_SUCCESS"; payload: string | null }
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_END" }
  | { type: "RESET" };
const initialState: FormState = {
    name: "",
    email: "",
    error: null,
    success: null,
    isSubmitting: false,
};
function profileReducer(state: FormState, action: FormAction): FormState {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.payload, error: null, success: null };
        case "SET_EMAIL":
            return { ...state, email: action.payload, error: null, success: null };
        case "SET_ERROR":
            return { ...state, error: action.payload };
        case "SET_SUCCESS":
            return { ...state, success: action.payload };
        case "SUBMIT_START":
            return { ...state, isSubmitting: true, error: null, success: null };
        case "SUBMIT_END":
            return { ...state, isSubmitting: false };
        case "RESET":
            return initialState;
        default:
            return state;
    }
}
function ProfileForm({onSave}: ProfileFormProps) {
    const [state, dispatch] = useReducer(profileReducer, initialState);
    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // start loading
     dispatch({ type: "SUBMIT_START" });
    // validation
    if (!state.name.trim()) {
    dispatch({ type: "SET_ERROR", payload: "Name is required." });
    dispatch({ type: "SUBMIT_END" });
    return;
    }
    if (!state.email.includes("@")) {
    dispatch({ type: "SET_ERROR", payload: "Invalid email address." });
    dispatch({ type: "SUBMIT_END" });
    return;
    }
    // simulate API call (like saving to server)
    await new Promise((resolve) => setTimeout(resolve, 800));
    dispatch({ type: "SET_SUCCESS", payload: "Profile saved successfully!" });
    onSave({ name: state.name, email: state.email });
    // stop loading
     dispatch({ type: "SUBMIT_END" });
    };
    return(
        <div>
            <h2>Profile Forms</h2>
            {state.error && <p style={{color: "red"}}>{state.error}</p> }
            {state.success &&<p style={{color: "green"}}>{state.success}</p>}
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label>Name</label>
                    <input 
                     type="text" 
                     value={state.name}
                     disabled={state.isSubmitting} 
                     onChange={(e) =>
                     dispatch({ type: "SET_NAME", payload: e.target.value })}/>
                </div>
                <div>
                    <label>Email</label>
                    <input 
                     type="email" 
                     value={state.email}
                     disabled={state.isSubmitting}
                     onChange={(e) =>
                     dispatch({ type: "SET_EMAIL", payload: e.target.value })}/>
                </div>
                <button 
                type="submit" disabled={state.isSubmitting}>
                   {state.isSubmitting ? "Saving..." : "Save"}
                    </button>
                <button
                   type="button"
                   disabled={state.isSubmitting}
                   onClick={() => dispatch({ type: "RESET" })}
                   style={{ marginLeft: "10px" }}
                    >
                    Reset
                </button>
   
            </form>
            <hr />
            <p>Name: {state.name}</p>
            <p>Email: {state.email}</p>
        </div>
    );
}
export default ProfileForm;