import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import User from './components/User';
import './App.css'
import { useCookies } from 'react-cookie';
import { useMemo, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const { isAuthenticated } = useAuth0();
  const [cookies, setCookie] = useCookies();

  // use == instead of === to convert the cookies value to boolean
  useEffect(() => {
    if (cookies.logout == 'true') {
      setCookie("username", undefined);
      setCookie("email", undefined);
      setCookie("picture", undefined);
    } else if (cookies.logout == 'false' && isAuthenticated === true) {
      setCookie("isAuth1", isAuthenticated);
      setCookie('isAuth2', isAuthenticated);
    }
  }, [isAuthenticated, cookies.logout]);


  return (
    <Router>
      <div className="App">
        {!(cookies.isAuth1 == 'true') ?
          <div>
            <p style={{ fontSize: "1.5rem" }}>App 1 <br /> Please Login</p>
            <LoginButton />
          </div>
          :
          <div>
            <LogoutButton />
            <div className='space'></div>
            <User />
          </div>}
      </div>
    </Router>
  )
}

export default App;

