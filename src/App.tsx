import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import UsersPage from "./pages/UsersPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
function App() {
 
  return (
    <Routes>
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
}  


export default App;
