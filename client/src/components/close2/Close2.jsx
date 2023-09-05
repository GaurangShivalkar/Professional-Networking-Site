import "./close2.css";
import { Link } from "react-router-dom";

export default function Close2({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <Link
      to={"/profile/" + user.username}
      style={{ textDecoration: "none" }}
    >
      <div className="cardmain">
        <div className="card">
          <div className="sidebarFriend2">

            <img className="sidebarFriendImg2" src={user.profilePicture
              ? PF + user.profilePicture
              : PF + "person/noAvatar.png"} alt="" />

          </div>
          <span className="sidebarFriendName2">{user.username}</span><br></br>
          <span className="sidebarFriendSkill">{user.email}</span><br></br>
          
          <span className="sidebarjobtitle">{user.jobTitle}</span>
        </div>
        </div>
      
    </Link>
 

  );
  
}

   /*const CircleClose2 = () => {
    return (

      <Link
        to={"/profile/" + user.username}
        style={{ textDecoration: "none" }}
      >
        <div className="cardmain">
          <div className="card">
            <div className="sidebarFriend2">

              <img className="sidebarFriendImg2" src={user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"} alt="" />

            </div>
            <span className="sidebarFriendName2">{user.username}</span><br></br>
            <span className="sidebarFriendSkill">{user.email}</span>
          </div>
        </div>

      </Link>


    );

  };

  const AdminClose2 = () => {
    return (
      <Link
        to={"/profile/" + user.username}
        style={{ textDecoration: "none" }}
      >
        <li className="sidebarFriend">

          <img className="sidebarFriendImg" src={user.profilePicture
            ? PF + user.profilePicture
            : PF + "person/noAvatar.png"} alt="" />
          <span className="sidebarFriendName">{user.username}</span>
        </li>
      </Link>

    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user.isAdmin===true ?< : <AdminClose2 />} {user.isAdmin===true = <AdminClose2 /> || <CircleClose2 />}
        </div>
        </div>
      );
    }*/