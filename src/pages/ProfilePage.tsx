import ProfileForm from "../components/ProfileForm";
import { useProfile } from "../context/ProfileContext";


function ProfilePage() {
    const{savedProfile, saveProfile, clearProfile} = useProfile();
  
    return (
        <div>
            <h2>This is the Profile Page</h2>
             <ProfileForm onSave={saveProfile}/>
            {savedProfile ? (
            <div>
            <h3>Saved Profile</h3>
            <p>Name: {savedProfile.name}</p>
            <p>Email: {savedProfile.email}</p>
            <button onClick={clearProfile}>Clear Profile</button>
            </div>
            ):(<p>No profile saved yet</p>)}
        </div>
    );
}
export default ProfilePage;