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
import AnonymousRoute from "./routes/AnonymousRoute";

// NEED TO SET CORRECT FIREBASE PERMISSIONS, TO BLOCK ACCESS TO USERS, LEARN

const App = () => {
  return (
    // TODO Add a route for Admin users
    // Wrap routes in our Authentication context provider
    // Wrap routes in our Layout containing the Header and Footer
    // Create protected route to stop authenticated users accessing register/login/reset password+ https://stackoverflow.com/questions/74045405/how-to-disable-user-to-access-login-register-page-once-they-login

    <UserAuthContextProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route element={<AnonymousRoute />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </UserAuthContextProvider>
  );
};

export default App;
