import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './User.css';
import { useCookies } from 'react-cookie';
import { useEffect, useMemo } from 'react';
import { DyteMeeting } from "dyte-client";
import { useParams, useNavigate } from 'react-router-dom'

export default function User() {
    const { user, isAuthenticated } = useAuth0();
    const [cookies, setCookie] = useCookies();

    useEffect(() => {
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
  , [cookies.logout, isAuthenticated]);


  const onDyteInit = (meeting) => {
    //meeting ended event
    meeting.on(meeting.Events.meetingEnded, () => {
      sessionStorage.clear();
      // history("/");
    });
  };


    return (
      (cookies.isAuth1 == 'true') && (
      <div className="User">
        <DyteMeeting 
        onInit={onDyteInit}
        clientId= {process.env.REACT_APP_DYTE_ORG_ID}
        meetingConfig={{
          roomName: `Sajad Corp`,
          authToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMzM2RiOWYxLWIyNGQtNGQ3My1iNzdlLWZiNWVlYzlhYTcyNSIsImxvZ2dlZEluIjpmYWxzZSwiZW1haWwiOiJzYWphZC5tYWh5YWVpQGdtYWlsLmNvbSIsImlhdCI6MTY1NjM2MDcwNiwiZXhwIjoxNjY1MDAwNzA2fQ.GKm5dk30oxQJCEnFbZlty_Re8F4geDR_Tgid3WGPxW_kVW3K3cw7mPSeExa0m6FNdhwodKh5NgukDJCm7r6j1mlD-YKBBBAx5vV31c_NrpxM91lEZqA9UtCN5flkKA_Q7DCEcAg_4-OyNDKxtA-YaoCKIQM3g9iN2194CPQJFURmAkuR9ZJdO8Xq5qR_MQCBjchqP3eaveQLy-6b1nZqUqB5DL-XBM2NLatMmBfs87V4MwKFJdoU50tJ9-e_Yg_Xdj12aGEYthCkc_BpOXhiJduttE_gTVOBB5sTKlRDQhjGN_mg0t6nlTy9LCai4Vuvcau0jVEBwxtggMeK1-HXmA',
          apiBase: process.env.REACT_APP_DYTE_BASE_URL
        }}
        />
      </div>
    )
  );
}
