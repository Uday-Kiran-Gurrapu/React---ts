import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import SearchInput from "./SearchInput";
import React from "react";

function Users() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { users, loading, error, fetchUsers } = useUsers();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16 text-gray-400">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-500 mr-3" />
        Loading users...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-950 border border-red-700 rounded-lg space-y-3">
        <p className="text-red-400">{error}</p>
        <button
          onClick={fetchUsers}
          className="px-4 py-2 bg-red-700 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Users List</h2>

      <div className="flex gap-2">
        <div className="flex-1">
          <SearchInput
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search users..."
          />
        </div>
        <button
          onClick={() => setSearchTerm("")}
          disabled={!searchTerm}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Clear
        </button>
      </div>

      {users.length === 0 ? (
        <p className="text-gray-400">No users available.</p>
      ) : filteredUsers.length === 0 ? (
        <p className="text-gray-400">No matching users found.</p>
      ) : (
        <div className="space-y-2">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-indigo-600 transition-colors"
            >
              <p className="font-medium text-gray-100">{user.name}</p>
              <p className="text-sm text-gray-400 mt-0.5">{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default React.memo(Users);
