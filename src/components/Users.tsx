import {useState } from "react";
import { useUsers} from "../hooks/useUsers";
import SearchInput from "./SearchInput";
import React from "react";
function Users(){
    const [searchTerm, setSearchTerm] = useState<string>("");
    const {users, loading, error, fetchUsers} = useUsers();
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if (loading) {return <div>Loading...</div>;}
    if (error){
        return (
        <div>
        <p style ={{color: "red"}}>{error}</p>
        <button onClick = {fetchUsers}>Retry</button>
        </div>
        );
    }  
    return (
        <div>
            <h2>Users List</h2>
            <SearchInput value={searchTerm} 
            onChange ={setSearchTerm} 
            placeholder="Search users..."/>
            <button onClick={()=> setSearchTerm("")} disabled={!searchTerm}>Clear</button>
            {users.length ===0 ? <p>No users available.</p>:(
                filteredUsers.length=== 0? <p>No matching users found.</p>:filteredUsers.map((user) => (
                <div key = {user.id}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <hr /> 
                </div>)))}
        </div>
    );
}
export default React.memo(Users);