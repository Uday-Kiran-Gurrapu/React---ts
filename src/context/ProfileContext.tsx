import React, { createContext, useContext, useState } from 'react';
import type { Profile } from '../types/Profile';
type ProfileContextType = {
    savedProfile: Profile | null;
    saveProfile: (profile: Profile) => void;
    clearProfile: () => void;
}
const ProfileContext = createContext<ProfileContextType | undefined>(undefined);
export function ProfileProvider({ children }: { children: React.ReactNode }) {
    const [savedProfile, setsavedProfile] = useState<Profile | null>(null);
    const saveProfile = (profile: Profile) => {
        setsavedProfile(profile);
    };
    const clearProfile = () => {
        setsavedProfile(null);
    };
    return (
        <ProfileContext.Provider value={{ savedProfile, saveProfile, clearProfile }}>
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