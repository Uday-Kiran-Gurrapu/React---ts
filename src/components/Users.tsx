import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import SearchInput from "./SearchInput";

const PAGE_SIZE = 4;

function Users() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState(1);
  const { users, loading, error, fetchUsers } = useUsers();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageUsers = filteredUsers.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setPage(1);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16 text-gray-400">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent-500 mr-3" />
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
            onChange={handleSearch}
            placeholder="Search users..."
          />
        </div>
        <button
          onClick={() => { handleSearch(""); }}
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
        <>
          <div className="space-y-2">
            {pageUsers.map((user) => (
              <div
                key={user.id}
                className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-accent-600 transition-colors"
              >
                <p className="font-medium text-gray-100">{user.name}</p>
                <p className="text-sm text-gray-400 mt-0.5">{user.email}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between pt-2">
            <p className="text-sm text-gray-500">
              Showing {(safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, filteredUsers.length)} of {filteredUsers.length}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={safePage === 1}
                className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ← Prev
              </button>
              <span className="text-sm text-gray-400 min-w-[70px] text-center">
                Page {safePage} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
                className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Users;
