import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import User from './components/User';
import './App.css'
import { useCookies } from 'react-cookie';
import { useEffect, useMemo } from 'react';

function App() {
  const { isAuthenticated } = useAuth0();
  const [cookies, setCookie] = useCookies();

  useMemo (() => {
      setCookie("isAuth1" , isAuthenticated); 
      setCookie('isAuth2' , isAuthenticated);
  }, [isAuthenticated, setCookie]);


  return (
    <div className="App">
      { !(cookies.isAuth1 == 'true') ? 
        <div>
          <p style={{ fontSize: "1.5rem" }}>App 1 <br/> Please Login</p>
           <LoginButton />
        </div>
       : 
        <div>
            <LogoutButton />
            <div className='space'></div>
            <User />
        </div> }
    </div>
  );
}

export default App;
