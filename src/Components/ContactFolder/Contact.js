import "./Contact.css";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <section className="contactSection">
        <h2 className="contactHeading">Contact</h2>
        <h3
          style={{
            textAlign: "center",
            marginTop: "4rem",
            fontSize: "2.8rem",
            color: "#F9D949",
          }}>
          Have You Any Question ?
        </h3>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "500",
            color: "#fff",
          }}>
          I'M AT YOUR SERVICES
        </p>
        <div className="contactInfo">
          <div className="firstInfo info">
            <IoCallSharp className="infoIcons" />
            <p className="infoHeading">Call us</p>
            <p className="infopara">7717766172</p>
          </div>
          <div className="secondInfo info">
            <FaLocationDot className="infoIcons" />
            <p className="infoHeading">Address</p>
            <p className="infopara">bihar</p>
          </div>
          <div className="thirdInfo info">
            <MdEmail className="infoIcons" />
            <p className="infoHeading">Email</p>
            <p className="infopara">patelvihaan512@gmail.com</p>
          </div>
        </div>
        <div className="contactBox">
          <div className="mapBox box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14459.73362472996!2d84.39350311337122!3d25.036333936638137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d0faa79318283%3A0x4c7cab0ee86ef03d!2sDaudnagar%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700321075385!5m2!1sen!2sin"
              width="100%"
              height="450"
              loading="lazy"
              title="This is My Address"
            />
          </div>
          <div className="inputBox box">
            <h3
              style={{
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "800",
                color: "#000",
                textTransform: "uppercase",
              }}>
              Contact us !
            </h3>
            <form action="https://formspree.io/f/xoqogkpb" method="post">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Enter your Name"
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                autoComplete="off"
                required
              />
              <textarea
                name="textarea"
                id="textarea"
                cols="44"
                rows="10"
                placeholder="Enter your Message"
                autoComplete="off"
                required
              />
              <button className="inputBtn">submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
