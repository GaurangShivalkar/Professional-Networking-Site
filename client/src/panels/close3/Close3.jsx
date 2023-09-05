import "./close3.css";
import { Link } from "react-router-dom";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import axios from "axios";

export default function Close3({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const Deleteuser = async () => {
    try {
      await axios.delete(`/users/${user._id}`);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
      console.log("unsuccess");
    }
   
  };
  return (
  
    <li className="sidebarFriend">
         <Link
    to={"/profile/" + user.username}
    style={{ textDecoration: "none" }}
  >
      <img className="sidebarFriendImg" src={user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
      </Link><span className="sidebarFriendName">{user.feedback}</span>
      <button onClick={Deleteuser} className="DeleteIcon"><DeleteForeverIcon/></button>
    </li>
   
    
  );
}