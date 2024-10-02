import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PetList from "./pages/PetList";
import PetDetail from "./pages/PetDetail";
import AdminDashboard from "./pages/AdminDashboard";
import { UserProvider } from "./pages/UserContext";
import UserProfile from './pages/UserProfile';
import PetMatchmaker from './pages/PetMatchmaker';
import Articles from './pages/Articles';
import Error from './pages/Error';
import ContactUs from "./pages/ContactUs";
import ArticleDetail from './pages/ArticleDetail';
import ProtectedAdminRoute from './pages/ProtectedAdminRoute'
import About from "./pages/About";
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pets" element={<PetList />} />
          <Route path="/pets/:id" element={<PetDetail />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/blog" element={<Articles />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/petmatchmaker" element={<PetMatchmaker />} />
          <Route path="*" element={<Error />} />

          {/* Protected routes for Admin */}
          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            }
          />
          
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}


export default App;
