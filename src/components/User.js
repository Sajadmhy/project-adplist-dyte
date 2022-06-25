import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './User.css';

export default function User() {
    const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="User">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
