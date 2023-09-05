import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Preview from "./components/preview/Preview";
import Trial from "./pages/trial/Trial";
import Feedback from "./components/feedback/Feedback";
import Circle from "./components/circle/Circle";
import Admin from "./pages/admin/Admin";


function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route path="/trial">
          <Trial/>
        </Route>
        <Route path="/preview">
          <Preview />
        </Route>
        <Route path="/feedback">
          <Feedback/>
        </Route>
        <Route path="/circle">
          <Circle/>
        </Route>
        <Route path="/admin">
         <Admin/> 
         
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;