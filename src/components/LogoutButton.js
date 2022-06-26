import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useCookies } from "react-cookie";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const [setCookie] = useCookies()

  const handleLogout = () => {
    logout({ returnTo: window.location.origin })
    setCookie('isAuth1', false)
    setCookie('isAuth2', false)
  }

  return (
    <button onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogoutButton;
