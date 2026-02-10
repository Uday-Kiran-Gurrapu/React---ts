import ProfileForm from "../components/ProfileForm";
import {type Profile } from "../types/Profile";
import { useState } from "react";

function ProfilePage() {
    const[savedProfile, setSavedProfile] = useState< Profile | null >(null);
    const handleSaveProfile = (profile: Profile)=>{
    setSavedProfile(profile);
  }
    return (
        <div>
            <h2>This is the Profile Page</h2>
             <ProfileForm onSave={handleSaveProfile}/>
            {savedProfile ? (
            <div>
            <h3>Saved Profile</h3>
            <p>Name: {savedProfile.name}</p>
            <p>Email: {savedProfile.email}</p>
            </div>
            ):<p>No profile saved yet</p>}
        </div>
    );
}
export default ProfilePage;