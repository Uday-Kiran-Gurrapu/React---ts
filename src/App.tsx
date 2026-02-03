import { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Users from "./components/Users";
import ProfileForm from "./components/ProfileForm";
import type {Profile} from "./components/ProfileForm";
function App() {
  const[count, setCount] = useState<number>(0);
  const[savedProfile, setSavedProfile] = useState< Profile | null >(null);
  const handleSaveProfile = (profile: Profile)=>{
    setSavedProfile(profile);
  }
  return (
    <div>
      <Header title="React + TypeScript 🚀" userName="Uday" />
      <Counter count= {count} 
      onIncrease= {() => setCount(count + 1)} 
      onDecrease= {() => count > 0 && setCount(count - 1)}/>
      <Users/>
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


export default App;
