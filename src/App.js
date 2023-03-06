import { Route, Routes } from "react-router-dom";
import { UserAuthContextProvider } from "./context/userAuthContext";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./routes/ProtectedRoute";

// NEED TO SET CORRECT FIREBASE PERMISSIONS, TO BLOCK ACCESS TO USERS, LEARN

const App = () => {
  return (
    // Wrap routes in our Authentication context
    // Wrap routes in our Layout containing the Header and Footer

    <UserAuthContextProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </UserAuthContextProvider>
  );
};

export default App;
