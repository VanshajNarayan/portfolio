import "./Service.css";
import { MdDeveloperMode } from "react-icons/md";

const Service = () => {
  return (
    <>
      <section className="ServiceSection">
        <h2 style={{fontSize:'5rem', color:"#F9D949", textTransform:'uppercase'}} >Service</h2>
        <h2 className="serviceHeading">This is My Expertise, <br /> The Services I'll Provide My Clients</h2>
        <div className="serviceBox">
          <div className="firstBox box">
            <p>
              <MdDeveloperMode className="icon" />
            </p>
            <h2 className="box_heading"> Frontend developer </h2>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et,
              rem temporibus praesentium suscipit error voluptatem minus
              reprehenderit deserunt! Aut.
            </p>
          </div>
          <div className="secondBox box">
          <p>
              <MdDeveloperMode className="icon" />
            </p>
            <h2 className="box_heading"> Frontend developer </h2>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et,
              rem temporibus praesentium suscipit error voluptatem minus
              reprehenderit deserunt! Aut.
            </p>
          </div>
          <div className="thirdBox box">
          <p>
              <MdDeveloperMode className="icon" />
            </p>
            <h2 className="box_heading"> Frontend developer </h2>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et,
              rem temporibus praesentium suscipit error voluptatem minus
              reprehenderit deserunt! Aut.
            </p>
          </div>
          <div className="fourthbox box">
          <p>
              <MdDeveloperMode className="icon" />
            </p>
            <h2 className="box_heading"> Frontend developer </h2>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et,
              rem temporibus praesentium suscipit error voluptatem minus
              reprehenderit deserunt! Aut.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
