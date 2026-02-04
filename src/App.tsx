import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Home from "./pages/Home";
import UsersPage from "./pages/UsersPage";
import ProfilePage from "./pages/ProfilePage";
function App() {
  const[count, setCount] = useState<number>(0);
  return (
    <div>
      <Header title="React + TypeScript 🚀" userName="Uday" />
      <Counter count= {count} 
      onIncrease= {() => setCount(count + 1)} 
      onDecrease= {() => count > 0 && setCount(count - 1)}/>
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
