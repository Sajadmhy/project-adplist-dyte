import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react"; 
import { useCookies } from "react-cookie";
import { Button } from 'sajad-react-component-library';

const LoginButton = () => {
  const { loginWithRedirect , isAuthenticated } = useAuth0();
  const [ cookies, setCookie ] = useCookies();

  const handleLogin = () => {
    loginWithRedirect();
    setCookie('logout' , false);
  }

  // useEffect(() => {
  //   setCookie('logout', !isAuthenticated)
  // }, [isAuthenticated])
  
  return (
  <Button label='Log In' onClick={handleLogin} />
  )
};

export default LoginButton;
