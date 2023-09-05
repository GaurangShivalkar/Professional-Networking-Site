/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";
import Topbar from "../../components/topbar/Topbar";

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function Admin({ user }) {
  const [alluser, setall] = useState([]);

  const Deleteuser = async () => {
    try {
      await axios.delete(`/users/${user._id}`);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
      console.log("unsuccess");
    }

  };
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
  return (
    <>
    <Topbar/>
      {/* <div classNameName="adminContainer">
      <div classNameName="feedback">
        feedback
      </div>
      <div user="all">
        all user data
      </div>{alluser.map((allusers) => (
          <Close3 key={allusers.id} user={allusers} />
        ))}
  </div>*/}

<div className="parent">

<div className="section1">
  User Table:
  <table>
        <tr>
          
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Institute</th>
          <th>Degree</th>
          <th>Company Name</th>
          <th>Job Title</th>
          <th>Skill Name</th>
          <th>Project Name</th>
          <th>Award Name</th>
          <th>Feedback</th>
          <th>Delete user</th>
        </tr>
        {alluser.map((allusers, key) => {
          return (
            <tr key={key}>
             
              <td>{allusers.username}</td>
              <td>{allusers.email}</td>
              <td>{allusers.phone}</td>
              <td>{allusers.institute}</td>
              <td>{allusers.degree}</td>
              <td>{allusers.companyName}</td>
              <td>{allusers.jobTitle}</td>
              <td>{allusers.skillName}</td>
              <td>{allusers.projectName}</td>
              <td>{allusers.awardName}</td>
              <td>{allusers.feedback}</td>
               <td><button onClick={Deleteuser} className="DeleteIcon"><DeleteForeverIcon /></button></td>
            </tr>
          )
        })}
      </table></div>
      <div className="section1"></div>
</div>


</>
      );
}