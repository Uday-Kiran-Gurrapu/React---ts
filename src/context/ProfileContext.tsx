import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';
import type { Profile } from '../types/Profile';
type ProfileContextType = {
    savedProfile: Profile | null;
    saveProfile: (profile: Profile) => void;
    clearProfile: () => void;
}
const ProfileContext = createContext<ProfileContextType | undefined>(undefined);
export function ProfileProvider({ children }: { children: React.ReactNode }) {
    const [savedProfile, setSavedProfile] = useState<Profile | null>(() => {
    const raw = localStorage.getItem("savedProfile");
    return raw ? (JSON.parse(raw) as Profile) : null;
    });
    useEffect(() => {
    if (savedProfile) {
    localStorage.setItem("savedProfile", JSON.stringify(savedProfile));
    } else {
    localStorage.removeItem("savedProfile");
   }
    }, [savedProfile]);
    const saveProfile = useCallback((profile: Profile) => {
        setSavedProfile(profile);
    },[]);
    const clearProfile = useCallback(() => {
        setSavedProfile(null);
    },[]);
    const value = useMemo(() => ({ savedProfile, saveProfile, clearProfile }), 
    [savedProfile, saveProfile, clearProfile]);
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