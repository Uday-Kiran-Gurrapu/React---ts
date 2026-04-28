import { useState, useEffect } from "react";
import type {User} from "../types/User";

export function useUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = async (signal?: AbortSignal) => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: User[] = await response.json();
            setUsers(data);
        } catch (err) {
            if (err instanceof DOMException && err.name === "AbortError") return;
            console.error("Failed to fetch users:", err);
            setUsers([]);
            setError("Failed to load users. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const controller = new AbortController();
        fetchUsers(controller.signal);
        return () => controller.abort();
    }, []);

    const refetch = () => fetchUsers();

    return { users, loading, error, fetchUsers: refetch };
}

