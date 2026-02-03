import React, { useState } from "react";
export type Profile = {
    name: string;
    email: string;
}
type ProfileFormProps = {
    onSave:(profile: Profile) => void;
}
function ProfileForm({onSave}: ProfileFormProps) {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName (e.target.value);
        setError(null);
        setSuccess(null);    
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setError (null);
        setSuccess(null);
    }
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name.trim()) {
            setError ("Name is required.");
            return;
        }
        if (!email.includes("@")) {
            setError ("Invalid email address.");
            return;
        }
        setError (null);
        setSuccess("Profile saved Succesfully!");
        console.log(name, email);
        onSave({name, email});
    };
    return(
        <div>
            <h2>Profile Forms</h2>
            {error && <p style={{color: "red"}}>{error}</p> }
            {success &&<p style={{color: "green"}}>{success}</p>}
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange ={handleNameChange}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange ={handleEmailChange}/>
                </div>
                <button type="submit">Save</button>
            </form>
            <hr />
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
}
export default ProfileForm;