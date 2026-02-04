import ProfileForm from "../components/ProfileForm";
import type { Profile } from "../components/ProfileForm";
import { useState } from "react";

function ProfilePage() {
    const[savedProfile, setSavedProfile] = useState< Profile | null >(null);
    const handleSaveProfile = (profile: Profile)=>{
    setSavedProfile(profile);
  }
    return (
        <div>
            <h2>This is the Profile Page</h2>
            <ProfileForm />
        </div>
    );
}
export default ProfilePage;