import "./feedback.css";
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import Rightbar from "../rightbar/Rightbar";
import { useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";


export default function Feedback() {
  const { user } = useContext(AuthContext);

  
  const handleFeed = async (e) => {
    e.preventDefault();
    const feedb = {
        //personal
        feedback: feedback.current.value,
        
        //username and email of current user
        userId: user._id,

      }

      try {
          await axios.put(`/users/${user._id}`, feedb);
          console.log("feedback submitted")
      } catch (err) {
          console.log(err);
      }
    };
  const feedback = useRef();
  return (<>
    <Topbar />
    
    <div className="Feedback">
    <Sidebar />
    <div className="maincontainer">
    
      <form onSubmit={handleFeed}>

        

        <label for="subject">Subject</label>
        <textarea id="subject" ref={feedback} className="subject" placeholder="Write something.."></textarea>

        <button>jbadbh</button>
      </form>
    </div>
    <Rightbar />
    </div>
  </>
  );

}
