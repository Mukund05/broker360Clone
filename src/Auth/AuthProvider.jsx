import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../Api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  useEffect(() => {
    //need to check if token is valid or not
    const storedToken = localStorage.getItem("token");
    const getProfile = async () => {
      try {
        const res = await Api.getProfile(storedToken);
        console.log("check user token ", res);
        if (res.success) {
          setUser(res.data);
          setIsAuthenticated(true);
          // navigate("/");            //redirect to requested page when credential is valid
        }
      } catch (err) {
        console.error(err);
      }
    }

    if (storedToken) {
      getProfile();
    }
  }, []);

  const loginAction = async (data) => {
    try {
      const res = await Api.login(data);

      if (res.success) {
        const user = res.data.user;
        const token = res.data.token;

        setUser(user);
        setToken(token);
        setIsAuthenticated(true);

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/dashboard"); // Redirect to dashboard after login - update the path if needed
        return { success: true };
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
      return { success: false, message: err.message };
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut ,isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
