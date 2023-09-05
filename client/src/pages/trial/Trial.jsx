/* eslint-disable jsx-a11y/anchor-is-valid */


import "./trial.css";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";


export default function trial() {


  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <div className="maintrial">

          <ul className="job-list">
            <li className="job-preview">
              <div className="content float-left">
                <h4 className="job-title">
                  Senior Web Designer
                </h4>
                <h5 className="company">
                4SPL Technologies India Private Limited
                </h5>
              </div>
              <a href="#" className="btn btn-apply float-sm-right float-xs-left">
                Apply
              </a>
            </li>
            <li className="job-preview">
              <div className="content float-left">
                <h4 className="job-title">
                  Front-End Engineer
                </h4>
                <h5 className="company">
                Binary Infotech Pvt. Ltd
                </h5>
              </div>
              <a href="#" className="btn btn-apply float-sm-right float-xs-left">
                Apply
              </a>
            </li>
            <li className="job-preview">
              <div className="content float-left">
                <h4 className="job-title">
                  UI/UX Designer
                </h4>
                <h5 className="company">
                4SPL Technologies India Private Limited
                </h5>
              </div>
              <a href="#" className="btn btn-apply float-sm-right float-xs-left">
                Apply
              </a>
            </li>
            <li className="job-preview">
              <div className="content float-left">
                <h4 className="job-title">
                  Web Developer
                </h4>
                <h5 className="company">
                Binary Infotech Pvt. Ltd
                </h5>
              </div>
              <a href="#" className="btn btn-apply float-sm-right float-xs-left">
                Apply
              </a>
            </li>
            <li className="job-preview">
              <div className="content float-left">
                <h4 className="job-title">
                  Web Designer &amp; Developer
                </h4>
                <h5 className="company">
                CK Technologies
                </h5>
              </div>
              <a href="#" className="btn btn-apply float-sm-right float-xs-left">
                Apply
              </a>
            </li>
            <li className="job-preview">
              <div className="content float-left">
                <h4 className="job-title">
                  Visual Designer
                </h4>
                <h5 className="company">
                  Binary Infotech Pvt. Ltd
                </h5>
              </div>
              <a href="#" className="btn btn-apply float-sm-right float-xs-left">
                Apply
              </a>
            </li>
          </ul>

        </div>
        <Rightbar /></div>
    </>

  );
}
