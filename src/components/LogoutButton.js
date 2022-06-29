import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'sajad-react-component-library';

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {

    logout( { returnTo: window.location.origin });
  }

  return <Button label="Log Out" onClick={handleLogout} />
};

export default LogoutButton;
