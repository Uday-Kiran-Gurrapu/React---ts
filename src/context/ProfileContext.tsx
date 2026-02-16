import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { Profile } from '../types/Profile';
type ProfileContextType = {
    savedProfile: Profile | null;
    saveProfile: (profile: Profile) => void;
    clearProfile: () => void;
}
const ProfileContext = createContext<ProfileContextType | undefined>(undefined);
export function ProfileProvider({ children }: { children: React.ReactNode }) {
    const [savedProfile, setsavedProfile] = useState<Profile | null>(null);
    const saveProfile = useCallback((profile: Profile) => {
        setsavedProfile(profile);
    },[]);
    const clearProfile = useCallback(() => {
        setsavedProfile(null);
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