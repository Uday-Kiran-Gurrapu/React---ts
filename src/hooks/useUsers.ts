import { useState, useEffect } from "react";
export type User = {
  id: number;
  name: string;
  email: string;
};
export function useUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
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
        return {users, loading, error, fetchUsers};
}

