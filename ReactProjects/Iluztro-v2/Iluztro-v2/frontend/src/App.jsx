import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Summaries from "./pages/Summaries";
import LogoDesign from "./pages/LogoDesign";
import Websites from "./pages/Websites";
import Plans from "./pages/Plans";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import { useAuthContext } from "./hooks/useAuthContext.js";
import NotFound from "./pages/NotFound";

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          path="/summaries"
          element={<Summaries />}
        />
        <Route
          path="/logo-design"
          element={<LogoDesign />}
        />
        <Route
          path="/websites"
          element={<Websites />}
        />
        <Route
          path="/plans"
          element={<Plans />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/admin"
          element={user && user.is_admin ? <Admin /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={!user ? <Navigate to="/" /> : <Dashboard />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
