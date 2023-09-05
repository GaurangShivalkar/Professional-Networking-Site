import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";
//import { Redirect } from 'react-router-dom'




export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const history = useHistory({ forceRefresh: true });



  /*function OnClick() 
    {
    
      localStorage.clear();
      history.push("/login");
      //<Redirect to='/login' /> 
      console.log("logout");
    };*/

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
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Professional site</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend"
            className="searchInput"

          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          

            {/*<span className="topbarLink">Timeline</span>*/}
          
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <HomeOutlinedIcon />
            <span className="topbarLink"></span>
          </div>
          <div className="topbarIconItem">
            <Person />
            <span className="topbarLink"></span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarLink"></span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarLink"></span>
          </div>
          <form className="topbarlinks" /*onSubmit={OnClick}*/ onSubmit={handlleClick}>
            <button className="logoutbutton" type="submit"><ExitToAppIcon />logout</button></form>
        </div>
        
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
        
      </div>
      
    </div>
  );
}
