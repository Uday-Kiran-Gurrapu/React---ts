import { useEffect, useState, type ChangeEvent } from "react";
type User = {
    id: number;
    name: string;
    email: string;
}
function Users(){
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };
    const fetchUsers = async () => {
        try {
        setLoading(true);
        setError(null);
        const response = await fetch( "https://jsonplaceholder.typicode.com/users");
        if (!response.ok){
            throw new Error (`HTTP error! status: ${response.status}`);
        }
        const data: User[] = await response.json();
        setUsers(data);
        }catch(err){
        console.error("Failed to fetch users:", err);
        setUsers([]);
        setError("Failed to load users. Please try again.");
        }finally{
        setLoading(false);
        }   
    };
    useEffect(() => {fetchUsers();}, []);
    if (loading) {return <div>Loading...</div>;}
    if (error){
        return (
        <div>
        <p style ={{color: "red"}}>{error}</p>
        <button onClick = {fetchUsers}>Retry</button>
        </div>
        );
    }  
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
        <div>
            <h2>Users List</h2>
            <input
            type = "text"
            placeholder="search users..."
            value={searchTerm}
            onChange={handleSearchChange}
            />
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
export default Users;