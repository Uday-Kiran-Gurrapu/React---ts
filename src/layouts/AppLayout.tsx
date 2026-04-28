import Header from "../components/Header";
import ToastContainer from "../components/ToastContainer";
import { Outlet, NavLink } from "react-router-dom";
import { useTheme, type AccentColor } from "../context/ThemeContext";

const ACCENT_COLORS: { value: AccentColor; hex: string; label: string }[] = [
  { value: "indigo",  hex: "#6366f1", label: "Indigo"  },
  { value: "emerald", hex: "#10b981", label: "Emerald" },
  { value: "rose",    hex: "#f43f5e", label: "Rose"    },
  { value: "violet",  hex: "#8b5cf6", label: "Violet"  },
];

function AppLayout() {
  const { theme, accent, toggleTheme, setAccent } = useTheme();

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="bg-gray-900 border-b border-gray-800 shadow-lg">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-start justify-between">
            <Header title="React + TypeScript" userName="Uday" />

            {/* Theme controls */}
            <div className="flex items-center gap-3 pt-1">
              {/* Color picker */}
              {ACCENT_COLORS.map(({ value, hex, label }) => (
                <button
                  key={value}
                  onClick={() => setAccent(value)}
                  title={label}
                  aria-label={`Set ${label} accent`}
                  style={{ backgroundColor: hex }}
                  className={`w-5 h-5 rounded-full transition-transform hover:scale-110 ${
                    accent === value
                      ? "ring-2 ring-white ring-offset-2 ring-offset-gray-900 scale-110"
                      : ""
                  }`}
                />
              ))}

              {/* Dark/Light toggle */}
              <button
                onClick={toggleTheme}
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                aria-label="Toggle theme"
                className="ml-1 w-8 h-8 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 transition-colors text-base"
              >
                {theme === "dark" ? "☀" : "☾"}
              </button>
            </div>
          </div>

          <nav className="mt-4">
            <ul className="flex gap-6 list-none p-0 m-0">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors pb-1 ${
                      isActive
                        ? "text-accent-400 border-b-2 border-accent-400"
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
                        ? "text-accent-400 border-b-2 border-accent-400"
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
                        ? "text-accent-400 border-b-2 border-accent-400"
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

      <ToastContainer />
    </div>
  );
}

export default AppLayout;
