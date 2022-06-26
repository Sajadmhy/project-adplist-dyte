import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useCookies } from "react-cookie";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const [cookies, setCookie] = useCookies()

  const handleLogout = () => {
    setCookie('logout', true);
    logout({ returnTo: window.location.origin });
  }

  return (
    <button onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogoutButton;
