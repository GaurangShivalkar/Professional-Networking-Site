import "./resume.css";
import { useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Resume() {

    const { user } = useContext(AuthContext);

    //personal
    const city = useRef();
    const phone = useRef();
    const link = useRef();

    //education
    const institute = useRef();
    const degree = useRef();
    const cgpa = useRef();
    const subject = useRef();

    //work
    const companyName = useRef();
    const jobTitle = useRef();

    //skill
    const skillName = useRef();
    const skillLevel = useRef();

    //project
    const projectName = useRef();

    //award
    const awardName = useRef();

    const handleClick = async (e) => {
        e.preventDefault();
        const newresume = {
            //personal
            city: city.current.value,
            phone: phone.current.value,
            link: link.current.value,
            //username and email of current user
            userId: user._id,
            //email: user.email,

            //education
            institute: institute.current.value,
            degree: degree.current.value,
            cgpa: cgpa.current.value,
            subject: subject.current.value,

            //work
            companyName: companyName.current.value,
            jobTitle: jobTitle.current.value,

            //skill
            skillName: skillName.current.value,
            skillLevel: skillLevel.current.value,

            //project
            projectName: projectName.current.value,

            //award
            awardName: awardName.current.value,
        }

        try {
            await axios.put(`/users/${user._id}`, newresume);
            console.log("resume submitted")
        } catch (err) {
            console.log(err);
        }




    };
    return (
        <div className="resume">
            <div className="resumeWrapper">
                <form className="ResumeBox" onSubmit={handleClick} >
                    <div className="personal">
                        <h1>Personal Details:</h1>

                        <input placeholder="phone" ref={phone} required className="ResumeInput" /><br></br>
                        <input placeholder="location" ref={city} required className="ResumeInput" /><br></br>
                        <input placeholder="link" ref={link} required className="ResumeInput" />
                    </div >

                    <div className="education">
                        <h1>Education:</h1>
                        <input placeholder="institute name" ref={institute} required className="ResumeInput" /><br></br>
                        <input placeholder="degree" ref={degree} required className="ResumeInput" /><br></br>
                        <input placeholder="CGPA" ref={cgpa} required className="ResumeInput" /><br></br>
                        <input placeholder="subject" ref={subject} required className="ResumeInput" />
                    </div>

                    <div className="work">
                        <h1>Work:</h1>
                        <input placeholder="company name" ref={companyName} required className="ResumeInput" /><br></br>
                        <input placeholder="job title" ref={jobTitle} required className="ResumeInput" />
                    </div>

                    <div className="skills">
                        <h1>Skills:</h1>
                        <input placeholder="skill names" ref={skillName} required className="ResumeInput" /><br></br>
                        <input placeholder="skill level" ref={skillLevel} required className="ResumeInput"/*maybe a dropbox kind */ />
                    </div>

                    <div className="project">
                        <h1>Projects:</h1>
                        <input placeholder="project names" ref={projectName} required className="ResumeInput" />
                    </div>

                    <div className="award">
                        <h1>Awards:</h1>
                        <input placeholder="award names" ref={awardName} required className="ResumeInput" />
                    </div>

                    <div className="buttons">
                        <button className="buttonInput" >save</button>
                    </div>


                </form>

                <div className="button2">
                    <Link to="/preview" >
                        <button className="buttonInput">preview</button></Link>
                    <button className="buttonInput">print</button>
                </div>
            </div>

        </div>
    );
}
//<Link to="/preview" >
// <span className="buttonInput">preview</span></Link>