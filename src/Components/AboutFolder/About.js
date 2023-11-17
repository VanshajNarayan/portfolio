import { useState } from "react";
import "./About.css";
import Education from "./Education";
import Skill from "./Skill";

const About = () => {
  const [about, setAbout] = useState("Education");
  const buttonsArr = ["Education", "Skill"];
  return (
    <>
      <section className="aboutSection">
        <h2 className="aboutHeading">About <span>me</span></h2>
        <div className="buttonsBox">
          {
            buttonsArr.map((elements, index) => (
              <button key={index} onClick={() => setAbout(elements) } >{elements}</button>
            ))
          }
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