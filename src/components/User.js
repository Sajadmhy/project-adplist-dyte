import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './User.css';
import { useCookies } from 'react-cookie';
import { useEffect, useMemo } from 'react';

export default function User() {
    const { user, isAuthenticated } = useAuth0();
    const [cookies, setCookie] = useCookies();

    useEffect (() => {
      if ( cookies.logout == 'true') {
        setCookie("username" , undefined);
        setCookie("email" , undefined);
        setCookie("picture" , undefined);
      } else if ( isAuthenticated === true ) {
        setCookie("username" , user?.name);
        setCookie("email" , user?.email);
        setCookie("picture" , user?.picture);
      }
  }
  , [cookies.logout]);

    return (
      (cookies.isAuth1 == 'true') && (
      <div className="User">
        <img src={cookies?.picture} alt={cookies?.username} />
        <h2>{cookies?.username}</h2>
        <p>{cookies?.email}</p>
      </div>
    )
  );
}
