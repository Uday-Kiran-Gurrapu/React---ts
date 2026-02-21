import React, { createContext, useContext, useCallback, useMemo, useEffect, useReducer } from 'react';
import type { Profile } from '../types/Profile';
type ProfileState = {
    savedProfile: Profile | null;   
};
type ProfileAction =
  | { type: "SAVE_PROFILE"; payload: Profile }
  | { type: "CLEAR_PROFILE" };

const initialState: ProfileState = {
  savedProfile: null,
};
function profileReducer(state: ProfileState, action: ProfileAction): ProfileState {
  switch (action.type) {
    case "SAVE_PROFILE":
      return { ...state, savedProfile: action.payload };
    case "CLEAR_PROFILE":
      return { ...state, savedProfile: null };
    default:
      return state;
  }
}
type ProfileContextType = {
    savedProfile: Profile | null;
    saveProfile: (profile: Profile) => void;
    clearProfile: () => void;
};
const ProfileContext = createContext<ProfileContextType | undefined>(undefined);
export function ProfileProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(
    profileReducer,
    initialState,
    (init) => {
      const raw = localStorage.getItem("savedProfile");
      return {
        ...init,
        savedProfile: raw ? (JSON.parse(raw) as Profile) : null,
      };
    }
  );
    useEffect(() => {
    if (state.savedProfile) {
    localStorage.setItem("savedProfile", JSON.stringify(state.savedProfile));
    } else {
    localStorage.removeItem("savedProfile");
   }
    }, [state.savedProfile]);
    const saveProfile = useCallback((profile: Profile) => {
        dispatch({ type: "SAVE_PROFILE", payload: profile });
    },[]);
    const clearProfile = useCallback(() => {
        dispatch({ type: "CLEAR_PROFILE" });
    },[]);
    const value = useMemo(() => ({ savedProfile: state.savedProfile, saveProfile, clearProfile }), [state.savedProfile, saveProfile, clearProfile]);
    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    );
}
export function useProfile() {
    const ctx = useContext(ProfileContext);
    if (!ctx) {
        throw new Error("useProfile must be used within a ProfileProvider");
    }
    return ctx;
}