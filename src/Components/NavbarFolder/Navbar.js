import { useState } from "react";
import "./Navbar.css";
import { TbMenu2 } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import NavbarItems from "./NavbarItems";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbarBox">
          <div className="titlenavbar">
            <NavLink to="/" style={{textDecoration:'none'}} >
              <h2 style={{color:'#00A9FF', fontSize:'2rem', fontWeight:'800'}} >Vanshaj Narayan</h2>
            </NavLink>
          </div>
          <div
            className="navbar_menu"
            style={{ backgroundColor: "#00A9FF", borderRadius: "90%" }}>
            {show ? (
              <RxCross1
                onClick={() => setShow(!show)}
                style={{
                  fontSize: "2.4rem",
                  margin: "0.6rem 0.4rem",
                  cursor: "pointer",
                  color : "#fff"
                }}
              />
            ) : (
              <TbMenu2
                onClick={() => setShow(!show)}
                style={{
                  fontSize: "2.4rem",
                  margin: "0.6rem 0.4rem",
                  cursor: "pointer",
                  color : "#fff"
                }}
              />
            )}
          </div>
        </div>
      </nav>
      {show && <NavbarItems setShow={setShow} show={show} />}
    </>
  );
};

export default Navbar;
