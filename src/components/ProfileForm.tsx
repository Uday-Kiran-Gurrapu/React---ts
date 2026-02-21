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
}
type FormAction =
    | { type: "SET_NAME"; payload: string }
    | { type: "SET_EMAIL"; payload: string }
    | { type: "SET_ERROR"; payload: string | null }
    | { type: "SET_SUCCESS"; payload: string | null }
    | { type: "RESET" };
const initialState: FormState = {
    name: "",
    email: "",
    error: null,
    success: null,
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
        case "RESET":
            return initialState;
        default:
            return state;
    }
}
function ProfileForm({onSave}: ProfileFormProps) {
    const [state, dispatch] = useReducer(profileReducer, initialState);
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!state.name.trim()) {
            dispatch({ type: "SET_ERROR", payload: "Name is required." });
            return;
        }
        if (!state.email.includes("@")) {
            dispatch({ type: "SET_ERROR", payload: "Invalid email address." });
            return;
        }
        dispatch({ type: "SET_SUCCESS", payload: "Profile saved successfully!" });
        onSave({name: state.name, email: state.email});
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
                     onChange={(e) =>
                     dispatch({ type: "SET_NAME", payload: e.target.value })}/>
                </div>
                <div>
                    <label>Email</label>
                    <input 
                     type="email" 
                     value={state.email} 
                     onChange={(e) =>
                     dispatch({ type: "SET_EMAIL", payload: e.target.value })}/>
                </div>
                <button type="submit">Save</button>
            </form>
            <hr />
            <p>Name: {state.name}</p>
            <p>Email: {state.email}</p>
        </div>
    );
}
export default ProfileForm;