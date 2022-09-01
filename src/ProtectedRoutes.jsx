import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";

const useAuth = () => {
  const user = { loggeIn: false };
  return user && user.loggeIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Dashboard /> : <Signup />;
};

export default ProtectedRoutes;
