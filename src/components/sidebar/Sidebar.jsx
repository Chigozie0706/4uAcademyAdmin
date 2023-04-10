import './sidebar.css';
import { PermIdentity, Work } from '@material-ui/icons';
// import WorkIcon from '@mui/icons-material/Work';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            {/* <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Quick Menu</h3> */}
          <ul className="sidebarList ">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                USER
              </li>
            </Link>
            <Link to="/client" className="link">
              <li className="sidebarListItem">
                <Work className="sidebarIcon" />
                CLIENT
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
