import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Home.css";
import { NavLink } from "react-router-dom";
import myPhoto from "./Professional photo.png";

const Home = () => {
  const text = useTypewriter({
    words: ["Frontend developer", "React developer"],
    loop: {},
    typeSpeed: 120,
    delaySpeed: 50,
  });
  return (
    <>
      <section className="heroSection">
        <div className="heroBox">
          <div className="imgBox">
            <div className="imgborder" >
              <img src={myPhoto} alt="personal pic" />
            </div>
          </div>
          <div className="textBox">
            <p
              style={{
                color: "#fff",
                fontSize: "1.2rem",
                textTransform: "uppercase",
              }}>
              I'm
            </p>
            <p className="vanshaj">Vanshaj</p>
            <p className="Narayan">Narayan</p>
            <p
              style={{
                color: "#fff",
                fontSize: "2.3rem",
                textTransform: "uppercase",
                letterSpacing: "0.2rem",
                fontWeight: "600",
              }}>
              {text[0]} <Cursor cursorStyle="|" cursorColor="red" />
            </p>
            <NavLink to="/Contact">
              <button className="btn">Contact</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
