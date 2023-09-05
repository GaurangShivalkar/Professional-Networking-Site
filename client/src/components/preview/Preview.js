import "./preview.css";
import Topbar from "../topbar/Topbar";
import { AuthContext } from "../../context/AuthContext";
import {useContext,useRef } from "react";
import React from "react";
//import axios from "axios";
//import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export default function Preview() {
    const { user } = useContext(AuthContext);
    const printRef = useRef();
    const createAndDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
        /*axios.post('/create-pdf', this.state)
          .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'newPdf.pdf');
          })*/
      }
    

    return (
        <>
            <Topbar />

            <div className="container"  ref={printRef}>
                <div className="header">
                    {/*username*/ }
                   
                    <div className="full-name">
                        <span className="first-name">{user.username}</span>
                        
                    </div>
                    {/*personal info*/ }
                    <div className="contact-info">
                        <span className="email">Email: </span>
                        <span className="email-val">{user.email}</span>
                        <span className="separator"></span>
                        <span className="phone">Phone: </span>
                        <span className="phone-val">{user.phone}</span>
                        <span className="separator"></span>
                        <span className="phone">Link: </span>
                        <span className="phone-val">{user.link}</span>
                    </div>
                    {/*location or address*/ }
                    <div className="about">
                    <div className="section__title">Location</div>
                        <span className="desc">
                        {user.city}
                        </span>
                    </div>
                </div>

                <div className="details">
                    <div className="psection">
                        {/*work*/ }
                        <div className="section__title">Work</div>
                        <div className="section__list">
                            <div className="psection__list-item">
                                <div className="left">
                                    <div className="name">{user.companyName}</div>
                                    {/*<div className="addr">San Fr, CA</div>
                                    <div className="duration">Jan 2011 - Feb 2015</div>*/}
                                </div>
                                <div className="right">
                                    <div className="name">{user.jobTitle}</div>
                                    {/*<div className="desc">did This and that</div>*/}
                                </div>
                            </div>
                           {/*} <div className="section__list-item">
                                <div className="left">
                                    <div className="name">Akount</div>
                                    <div className="addr">San Monica, CA</div>
                                    <div className="duration">Jan 2011 - Feb 2015</div>
                                </div>
                                <div className="right">
                                    <div className="name">Fr developer</div>
                                    <div className="desc">did This and that</div>
                                </div>
                                </div>*/}

                        </div>
                    </div>
                    <div className="psection">
                        {/*education*/ }
                        <div className="section__title">Education</div>
                        <div className="section__list">
                            <div className="psection__list-item">
                                <div className="left">
                                    <div className="name">{user.institute}</div>
                                    <div className="addr">{user.degree}</div>
                                    <div className="duration">{user.subject}</div>
                                </div>
                                <div className="right">
                                    <div className="name">{user.cgpa}</div>
                                    {/*<div className="desc">did This and that</div>*/}
                                </div>
                            </div>
                            {/*
                            <div className="section__list-item">
                                <div className="left">
                                    <div className="name">Akount</div>
                                    <div className="addr">San Monica, CA</div>
                                    <div className="duration">Jan 2011 - Feb 2015</div>
                                </div>
                                <div className="right">
                                    <div className="name">Fr developer</div>
                                    <div className="desc">did This and that</div>
                                </div>
                            </div>*/}

                        </div>

                    </div>


                    <div className="psection">
                        {/*project*/ }
                        <div className="section__title">Projects</div>
                        <div className="section__list">
                            <div className="psection__list-item">
                                <div className="name">{user.projectName}</div>
                                {/*<div className="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div>*/}
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className="psection">
                        <div className="section__title">Skills</div>
                        <div className="pskills">
                            <div className="skills__item">
                                <div className="pleft">
                                    <div className="pname">
                                    {user.skillName}
                                    </div>
                                </div>
                                <div className="right">
                                    {
                                        /*<input id="ck1" type="checkbox"  />
                                         
                                         <label htmlFor="ck1"></label>
                                         <input id="ck2" type="checkbox"  />
                                         
         
                                         <label htmlFor="ck2"></label>
                                         <input id="ck3" type="checkbox" />
         
                                         <label htmlFor="ck3"></label>
                                         <input id="ck4" type="checkbox" />
                                         <label htmlFor="ck4"></label>
                                         <input id="ck5" type="checkbox" />
                                         <label htmlFor="ck5"></label>*/
                                    }

                                </div>
                            </div>


                            { /*<div className="skills__item">
                        <div className="left">
                            <div className="name">
                                CSS</div>
                        </div>
                        <div className="right">
                           <input id="ck1" type="checkbox" />
                            
                            <label htmlFor="ck1"></label>
                            <input id="ck2" type="checkbox" />
                            
                            <label htmlFor="ck2"></label>
                            <input id="ck3" type="checkbox" />

                            <label htmlFor="ck3"></label>
                            <input id="ck4" type="checkbox" />
                            <label htmlFor="ck4"></label>
                            <input id="ck5" type="checkbox" />
                            <label htmlFor="ck5"></label>
                        </div>
                         </div>
                        */
                            }

                        </div>
                    </div>
                    <div className="psection">
                        {/*award*/ }
                        <div className="section__title">
                            Awards
                        </div>
                        <div className="section__list">
                            <div className="psection__list-item">
                                {user.awardName}    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button3">
                <button className="buttonInput2" onClick={createAndDownloadPdf} >print</button>
            </div>

        </>
    );
}
