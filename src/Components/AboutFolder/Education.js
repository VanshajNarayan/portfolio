import "./Education.css";
import { GiCalendarHalfYear } from "react-icons/gi";

const Education = () => {
  return (
    <>
      <span className="heading">education</span>
      <div className="education-card">
        <div className="first-card card">
          <span className="bullet"></span>
          <div className="years">
            <GiCalendarHalfYear /> 2017
          </div>
          <div>
            <p className="degree">
              Matric degree - <span>bseb</span>
            </p>
          </div>
          <div>
            <p className="about-degree">
              I consummate 10th in bihar secondary examination board. I was
              student of
              <a
                href="https://en.wikipedia.org/wiki/Ashok_Inter_School_Daudnagar"
                rel="noreferrer"
                target="_blank"
                style={{
                  color: "#000",
                  marginLeft: "0.7rem",
                  marginRight: "0.7rem",
                }}>
                Ashok High School
              </a>
              from daudnagar, aurangabad, bihar and i learned a lot & today, i
              miss that days.
            </p>
          </div>
        </div>
        <div className="second-card card">
          <span className="bullet"></span>
          <div className="years">
            <GiCalendarHalfYear /> 2018-2021
          </div>
          <div>
            <p className="degree">
              diploma degree - <span>jharkhand university</span>
            </p>
          </div>
          <div>
            <p className="about-degree">
              yes, i finished diploma with jharkhand university of technology. I
              was read in
              <a
                href="https://garhwapolytechnic.com/"
                rel="noreferrer"
                target="_blank"
                style={{
                  color: "#000",
                  marginLeft: "0.7rem",
                  marginRight: "0.7rem",
                }}>
                GARHWA POLYTECHNIC
              </a>
              which place is hasker in Garhwa district. here, in this college we
              learned experience of life.
            </p>
          </div>
        </div>
        <div className="third-card card">
          <span className="bullet"></span>
          <div className="years">
            <GiCalendarHalfYear /> 2021-2024
          </div>
          <div>
            <p className="degree">
              b.tech degree - <span>jharkhand university</span>
            </p>
          </div>
          <div>
            <p className="about-degree">
              i persuing b.tech with jharkhand university of technology next
              year is my last year of b.tech. here, i admission in 
              <a
                href="https://www.rgc.edu.in/"
                rel="noreferrer"
                target="_blank"
                style={{
                  color: "#000",
                  marginLeft: "0.7rem",
                  marginRight: "0.7rem",
                }}>
                Ramgovind Group of Colleges
              </a>
              as a lateral entry & this college stead is Mahuatanr in koderma.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
