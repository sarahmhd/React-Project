import { createContext, useState } from "react";

export const LoginContext = createContext();

function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <LoginContext.Provider value={{ isLogin, toggleLogin }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
