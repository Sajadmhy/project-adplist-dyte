import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import User from './components/User';
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const { isAuthenticated, user } = useAuth0();

  console.log(user?.name)
  console.log(isAuthenticated);

  return (
    <Router>
      <div className="App">
        {! isAuthenticated ?
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

