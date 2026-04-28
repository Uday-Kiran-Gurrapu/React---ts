import React, { useReducer } from "react";
import { type Profile } from "../types/Profile";
import { useToast } from "../context/ToastContext";

type ProfileFormProps = {
  onSave: (profile: Profile) => void;
};

type FormState = {
  name: string;
  email: string;
  error: string | null;
  isSubmitting: boolean;
};

type FormAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_END" }
  | { type: "RESET" };

const initialState: FormState = {
  name: "",
  email: "",
  error: null,
  isSubmitting: false,
};

function profileReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload, error: null };
    case "SET_EMAIL":
      return { ...state, email: action.payload, error: null };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SUBMIT_START":
      return { ...state, isSubmitting: true, error: null };
    case "SUBMIT_END":
      return { ...state, isSubmitting: false };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function ProfileForm({ onSave }: ProfileFormProps) {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  const { addToast } = useToast();

  const handleOnSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_START" });

    if (!state.name.trim()) {
      dispatch({ type: "SET_ERROR", payload: "Name is required." });
      dispatch({ type: "SUBMIT_END" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(state.email)) {
      dispatch({ type: "SET_ERROR", payload: "Invalid email address." });
      dispatch({ type: "SUBMIT_END" });
      return;
    }

    onSave({ name: state.name, email: state.email });
    dispatch({ type: "SUBMIT_END" });
    addToast("Profile saved successfully!", "success");
  };

  return (
    <div className="space-y-5">
      <h2 className="text-xl font-bold text-white">Profile Form</h2>

      {state.error && (
        <div role="alert" className="p-3 bg-red-950 border border-red-700 rounded-lg">
          <p id="profile-error" className="text-red-400 text-sm">{state.error}</p>
        </div>
      )}

      <form onSubmit={handleOnSubmit} className="space-y-4" noValidate>
        <div className="space-y-1">
          <label htmlFor="profile-name" className="block text-sm font-medium text-gray-300">Name</label>
          <input
            id="profile-name"
            type="text"
            value={state.name}
            disabled={state.isSubmitting}
            aria-required="true"
            aria-describedby={state.error ? "profile-error" : undefined}
            onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors disabled:opacity-50"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="profile-email" className="block text-sm font-medium text-gray-300">Email</label>
          <input
            id="profile-email"
            type="email"
            value={state.email}
            disabled={state.isSubmitting}
            aria-required="true"
            aria-describedby={state.error ? "profile-error" : undefined}
            onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors disabled:opacity-50"
          />
        </div>

        <div className="flex gap-3 pt-1">
          <button
            type="submit"
            disabled={state.isSubmitting}
            className="px-5 py-2 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.isSubmitting ? "Saving..." : "Save"}
          </button>
          <button
            type="button"
            disabled={state.isSubmitting}
            onClick={() => dispatch({ type: "RESET" })}
            className="px-5 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Reset
          </button>
        </div>
      </form>

      <div className="pt-4 border-t border-gray-700 space-y-1">
        <p className="text-sm text-gray-500">
          Name: <span className="text-gray-300">{state.name || "—"}</span>
        </p>
        <p className="text-sm text-gray-500">
          Email: <span className="text-gray-300">{state.email || "—"}</span>
        </p>
      </div>
    </div>
  );
}

export default ProfileForm;
