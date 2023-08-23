import './App.css';
import Home from "./components/Home/Home"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login2 from './components/Login/Login2';
import Fruiteroute from './components/Products/Fruitroute'
import Vegiroute from './components/Products/Vegiroute'
import Dairyroute from './components/Products/Dairyroute'
import Otherroute from './components/Products/Otherroute'
import Profile from './components/Profile/Profile';
import Logout from './components/Logout/Logout';

import { createContext, useReducer } from 'react';
// export const UserContext = createContext();


const  App = () => {
  
  return (
  // <UserContext.Provider>
   <Router>
      <Routes>
        <Route exact path = "/" Component={Home}/>
        <Route exact path = "/login" Component={Login2}/>
        <Route exact path = "/signup" Component={Login2}/>
        <Route exact path = "/products" Component={Fruiteroute}/>
        <Route exact path = "/vegetables" Component={Vegiroute}/>
        <Route exact path = "/dprod" Component={Dairyroute}/>
        <Route exact path = "/grocery" Component={Otherroute}/>
        <Route exact path = "/profile" Component={Profile}/>
        <Route exact path = "/logout" Component={Logout}/>
      </Routes>
   </Router>
  //  </UserContext.Provider>
  );
}

export default App;
