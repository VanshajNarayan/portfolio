import { useState } from "react";
import "./About.css";
import Education from "./Education";
import Skill from "./Skill";

const About = () => {
  const [about, setAbout] = useState("Education");
  return (
    <>
      <section className="aboutSection">
        <h2 className="aboutHeading">About <span>me</span></h2>
        <div className="buttonsBox">
          <button className="btn1" onClick={(e) => setAbout(e.target.textContent)} >Education</button>
          <button className="btn2" onClick={(e) => setAbout(e.target.textContent)} >Skill</button>
        </div>
        <div className="aboutdiv">
          {
            about === "Education" ? <Education/> : <Skill/>
          }
        </div>
      </section>
    </>
  )
};

export default About;