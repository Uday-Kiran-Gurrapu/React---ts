import Header from "../components/Header";
import { Outlet, NavLink } from "react-router-dom";

function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="bg-gray-900 border-b border-gray-800 shadow-lg">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Header title="React + TypeScript 🚀" userName="Uday" />
          <nav className="mt-4">
            <ul className="flex gap-6 list-none p-0 m-0">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors pb-1 ${
                      isActive
                        ? "text-indigo-400 border-b-2 border-indigo-400"
                        : "text-gray-400 hover:text-gray-200"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/users"
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors pb-1 ${
                      isActive
                        ? "text-indigo-400 border-b-2 border-indigo-400"
                        : "text-gray-400 hover:text-gray-200"
                    }`
                  }
                >
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors pb-1 ${
                      isActive
                        ? "text-indigo-400 border-b-2 border-indigo-400"
                        : "text-gray-400 hover:text-gray-200"
                    }`
                  }
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
