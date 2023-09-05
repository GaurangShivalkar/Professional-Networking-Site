import './circle.css';
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import Rightbar from "../rightbar/Rightbar";

import Close2 from "../close2/Close2";
import {  useEffect, useState } from "react";
import axios from "axios";

export default function Circle() {
    const [alluser, setall] = useState([]);
  
    useEffect(() => {
      const getallusers = async () => {
        try {
          const userList = await axios.get("/users/alluser/");
          
          setall(userList.data);
        } catch (err) {
          console.log(err);
        }
      };
      getallusers();
    }, []);
  return (<>
    <Topbar />
    
    <div className="circle">
    <Sidebar />
    <div className="maincircle">
    
         {/*Users.map((u) => (*/}
            {alluser.map((allusers) => (
            <Close2 key={allusers.id} user={allusers} />
          ))}
        
    </div>
    <Rightbar />
    </div>
  </>
  );

}