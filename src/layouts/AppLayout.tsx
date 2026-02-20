import Header from "../components/Header";
import { Outlet, NavLink } from "react-router-dom";

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
});

function AppLayout() {
  return (
    <div>
      <Header title="React + TypeScript 🚀" userName="Uday" />

      <nav style={{ marginTop: 12 }}>
        <ul style={{ display: "flex", gap: 16, listStyle: "none", padding: 0 }}>
          <li><NavLink to="/" style={navLinkStyle} end>Home</NavLink></li>
          <li><NavLink to="/users" style={navLinkStyle}>Users</NavLink></li>
          <li><NavLink to="/profile" style={navLinkStyle}>Profile</NavLink></li>
        </ul>
      </nav>

      <div style={{ marginTop: 16 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
