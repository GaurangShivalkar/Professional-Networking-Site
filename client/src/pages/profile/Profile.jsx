import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import {useContext, useEffect, useState, } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Resume from "../../components/resume/Resume";
import Pphoto from "../../components/pphoto/Pphoto";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;
  const { user: currentUser } = useContext(AuthContext);


  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture
                  ? PF + user.coverPicture
                  : PF + "post/8.jpeg"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"}
                alt="no dp"
                />
              
             
            </div>
            <div className="profileInfo">
                  {user.username === currentUser.username  && <Pphoto />}
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
          {user.username === currentUser.username  &&  <Resume />}
          {user.username !== currentUser.username && <Feed username={username}/>}
            <Rightbar user={user} />

          </div>
        </div>
      </div>
    </>
  );
}
//