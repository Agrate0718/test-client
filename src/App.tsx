import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllUsersPage from "./components/Pages/AllUsersPage";
import LandingPage from "./components/Pages/LandingPage";
import LoginPage from "./components/Pages/LoginPage";
import RegisterPage from "./components/Pages/RegisterPage";
import UpdateUserPage from "./components/Pages/UpdateUserPage";
import ViewArtworks from "./components/Pages/UsersPage";
import NavBar from "./components/Partials/NavBar";

function App() {
  return (
    <Router>
      <div className="">
        <header>
          <NavBar />
        </header>

        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route path="/Register" element={<RegisterPage />} />
        </Routes>
        <Routes>
          <Route path="/Update" element={<UpdateUserPage />} />
        </Routes>
        <Routes>
          <Route path="/All" element={<AllUsersPage />} />
        </Routes>
      </div>
      <footer className="border-4 mt-96 border-orange-800">footer</footer>
    </Router>
  );
}

export default App;
