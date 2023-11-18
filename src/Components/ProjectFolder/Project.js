import "./Project.css";
import shoppingImg from "./shopping site photo.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Project = () => {
  return (
    <>
      <section className="project_section">
        <h2 className="projectHeading">Project</h2>
        <h2 className="projectPara">
          This is My Projects, <br /> The Projects You Could Review.
        </h2>
        <div className="projectBox">
          <div
            className="firstproject project"
            style={{ backgroundColor: "#F9D949" }}>
            <img
              src={shoppingImg}
              alt="shopping website project"
              width="100%"
            />
            <p className="project_name">Shopping website</p>
            <a
              href="https://vanshajshoppingsite.netlify.app/"
              rel="noreferrer"
              target="_blank">
              view <FaLongArrowAltRight className="arrowIcons" />
            </a>
          </div>
          <div className="secondproject project" style={{ backgroundColor: "#F9D949" }} >
          <img
              src={shoppingImg}
              alt="shopping website project"
              width="100%"
            />
            <p className="project_name">Shopping website</p>
            <a
              href="https://vanshajshoppingsite.netlify.app/"
              rel="noreferrer"
              target="_blank">
              view <FaLongArrowAltRight className="arrowIcons" />
            </a>
          </div>
          <div className="thirdproject project" style={{ backgroundColor: "#F9D949" }} >
          <img
              src={shoppingImg}
              alt="shopping website project"
              width="100%"
            />
            <p className="project_name">Shopping website</p>
            <a
              href="https://vanshajshoppingsite.netlify.app/"
              rel="noreferrer"
              target="_blank">
              view <FaLongArrowAltRight className="arrowIcons" />
            </a>
          </div>
          <div className="fourthproject project" style={{ backgroundColor: "#F9D949" }} >
          <img
              src={shoppingImg}
              alt="shopping website project"
              width="100%"
            />
            <p className="project_name">Shopping website</p>
            <a
              href="https://vanshajshoppingsite.netlify.app/"
              rel="noreferrer"
              target="_blank">
              view <FaLongArrowAltRight className="arrowIcons" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
