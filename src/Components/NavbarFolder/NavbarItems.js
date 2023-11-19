import { NavLink } from "react-router-dom";
import { FaGithub, FaInstagramSquare } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import "./NavbarItems.css";

const NavbarItems = ({ setShow, show }) => {
  const liItems = ["Home", "About", "Service", "Project", "Contact"];
  return (
    <>
      <div className="navbarItems">
        <div className="items">
          <ul type="none">
            {liItems.map((items, index) => (
              <li key={index}>
                <NavLink
                  to={items === "Home" ? "/" : items}
                  onClick={() => setShow(!show)}>
                  {items}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="social_icons" style={{ marginTop: "2rem" }}>
            <a
              href="https://github.com/VanshajNarayan"
              rel="noreferrer"
              target="_blank"
              style={{ textDecoration: "none" }}>
              <FaGithub
                title="Github"
                style={{
                  color: "#000",
                  fontSize: "2rem",
                  cursor: "pointer",
                  marginBottom: "1.5rem",
                  marginLeft: "2rem",
                  display: "block",
                }}
                onClick={() => setShow(!show)}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/vanshaj-narayan/"
              rel="noreferrer"
              target="_blank"
              style={{ textDecoration: "none" }}>
              <FiLinkedin
                title="Linkedin"
                style={{
                  color: "#000",
                  fontSize: "2rem",
                  cursor: "pointer",
                  marginBottom: "1.5rem",
                  marginTop: "3.5rem",
                  marginLeft: "2rem",
                  display: "block",
                }}
                onClick={() => setShow(!show)}
              />
            </a>
            <a
              href="https://www.instagram.com/mr_vihaan_patel?igshid=YzAwZjE1ZTI0Zg%3D%3D"
              rel="noreferrer"
              target="_blank"
              style={{ textDecoration: "none" }}>
              <FaInstagramSquare
                title="Instagram"
                style={{
                  color: "#000",
                  fontSize: "2rem",
                  cursor: "pointer",
                  marginBottom: "1.5rem",
                  marginTop: "3.5rem",
                  marginLeft: "2rem",
                  display: "block",
                }}
                onClick={() => setShow(!show)}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarItems;
