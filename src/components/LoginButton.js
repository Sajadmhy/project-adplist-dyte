import React from "react";
import { useAuth0 } from "@auth0/auth0-react"; 
import { useCookies } from "react-cookie";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [cookies, setCookie] = useCookies();

  const handleLogin = () => {
    loginWithRedirect();
    setCookie('logout' , false);
  }
  
  return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;
