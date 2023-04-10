import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import ClientList from './pages/clientList/ClientList';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';

function Apps() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/users">
            <UserList />
          </Route>
          {/* <Route path="/users">
            <UserList />
          </Route> */}
          <Route path="/client">
            <ClientList />
          </Route>
          {/* <Route path="/login">
            <Login />
          </Route>
          <Route path="/signups">
            <SignUp />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default Apps;
