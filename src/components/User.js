import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './User.css';
import { useCookies } from 'react-cookie';
import { useEffect, useMemo } from 'react';

export default function User() {
    const { user, isAuthenticated } = useAuth0();
    const [cookies, setCookie] = useCookies();

    useEffect (() => {
        setCookie("isAuth" , isAuthenticated);
        setCookie("username" , user?.name);
        setCookie("email" , user?.email);
        setCookie("picture" , user?.picture);
    }
    , [isAuthenticated,setCookie]);

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
