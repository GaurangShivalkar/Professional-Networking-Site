import "./sidebar.css";
import {
  RssFeed,
  

  HelpOutline,
  WorkOutline,
  Event,

} from "@material-ui/icons";
//import { Users } from "../../dummyData";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";

export default function Sidebar() {
  const history = useHistory({ forceRefresh: true });

  const handlleClick = async (e) => {
    e.preventDefault();
    try {
      await localStorage.clear(user);
      window.location.reload(false);
      history.push("/login");
      console.log("logout");
    } catch (err) {
      console.log(err);
    }
  }

  const { user } = useContext(AuthContext);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="sidebarListItemText">Home</span>
            </Link>
          </li>
          



          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <Link to="/feedback" style={{ textDecoration: "none" }}>
              <span className="sidebarListItemText">Feedback</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <Link to="/trial" style={{ textDecoration: "none" }}>
              <span className="sidebarListItemText">Jobs</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <Link to="/circle" style={{ textDecoration: "none" }}>
              <span className="sidebarListItemText">My Network</span></Link>
          </li>

        </ul>
        <form className="topbarlinks" /*onSubmit={OnClick}*/ onSubmit={handlleClick}>
          <button className="sidebarButton">LOG OUT</button></form>


        <Link to="/admin" style={{ textDecoration: "none" }}>
          {user.isAdmin === true &&

            <button className="adminbutton">admin</button>}</Link>
        <hr className="sidebarHr" />

      </div>
    </div>
  );
}
