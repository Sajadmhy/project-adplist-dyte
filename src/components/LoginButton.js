import React from "react";
import { useAuth0 } from "@auth0/auth0-react"; 
import { Button } from 'sajad-react-component-library';

const LoginButton = () => {
  const { loginWithRedirect , isAuthenticated } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  }

  return (
  <Button label='Log In' onClick={handleLogin} />
  )
};

export default LoginButton;
