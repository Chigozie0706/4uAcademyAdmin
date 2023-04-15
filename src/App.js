// import Sidebar from './components/sidebar/Sidebar';
// import Topbar from './components/topbar/Topbar';
import './App.css';
// import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import UserList from './pages/userList/UserList';
// import ClientList from './pages/clientList/ClientList';
// import Login from './pages/login/Login';
// import SignUp from './pages/signUp/SignUp';
import Apps from './apps';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/users">
          <Login />
        </Route> */}
        <Route exact path="/users">
          <Apps />
        </Route>
        {/* <Route path="/signup">
          <SignUp />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
