import { Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import UsersPage from "./pages/UsersPage";
import ProfilePage from "./pages/ProfilePage";
function App() {
 
  return (
    <div>
      <Header title="React + TypeScript 🚀" userName="Uday" />
      <nav style={{ marginTop: 12 }}>
        <ul style={{ display: "flex", gap: 16, listStyle: "none", padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
    );
}  


export default App;
