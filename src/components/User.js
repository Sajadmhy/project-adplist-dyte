import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './User.css';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { DyteMeeting } from "dyte-client";
import { joinExistingRoom } from './joinExistingRoom';
import { useParams, useNavigate } from 'react-router-dom'

export default function User() {
    const { user, isAuthenticated } = useAuth0();
    const [cookies, setCookie] = useCookies();
    let auth = sessionStorage.getItem("auth");
    let roomName = sessionStorage.getItem("roomName");
    let params = useParams()
    let history = useNavigate();

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


  const onDyteInit = (meeting) => {
    //meeting ended event
    meeting.on(meeting.Events.meetingEnded, () => {
      sessionStorage.clear();
      history("/");
    });
  };

  useEffect(() => {
    if(!auth && !roomName){
      joinExistingRoom(params.id, params.room)
    }
  }, [])


    return (
      (cookies.isAuth1 == 'true') && (
      <div className="User">
        <DyteMeeting 
        onInit={onDyteInit}
        clientId= {process.env.REACT_APP_DYTE_ORG_ID}
        meetingConfig={{
          roomName: `Sajad Corp`,
          authToken: auth,
          apiBase: process.env.REACT_APP_DYTE_BASE_URL
        }}
        />
      </div>
    )
  );
}
