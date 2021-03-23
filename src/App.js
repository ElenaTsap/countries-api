import './App.css';
import {Route, Switch} from 'react-router-dom'
import Auth from './pages/Auth'
import Countries from './pages/Countries'
import {useState, useEffect} from 'react'
import AuthCheck from './pages/AuthCheck'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token != null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  let country = <Auth setIsLoggedIn = {setIsLoggedIn}/>;
  if (isLoggedIn) {
    country = <Countries/>
  }

  let authCheck = <Auth setIsLoggedIn = {setIsLoggedIn}/>

  /* we created nested routes in the main route that render conditionally if the user is logged in. This way we create a protected space only for logged in users */
  let personalRoutes = [
    <Route path = "/personal/home"><h1>home</h1></Route>,
    <Route path = "/personal/email"><h1>email</h1></Route>,
    <Route path = "/personal/dashboard"><h1>dashboard</h1></Route>,
    <Route path = "/personal/profile"><h1>profile</h1></Route>
  ]

  return (
    <Switch>
      <Route exact path = "/">
        <AuthCheck isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}>
          <Countries/>
        </AuthCheck>
      </Route>
      
      <Route path = "/auth">
        {authCheck}
      </Route>

      <Route path= "/personal">
        
        <AuthCheck isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}>
          {personalRoutes}
        </AuthCheck>
        {/* {isLoggedIn?personalRoutes:authCheck} */}
      </Route>

      <Route path = "/countries">
      <AuthCheck isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}>
          <Countries/>
        </AuthCheck>
        {/* {country} */}
      </Route>

      {/* <Route path = "/countries" component = {isLoggedIn?Countries:Auth}/> */}

    </Switch>

  );
}

export default App;
