import "./Skill.css";

const Skill = () => {
  return (
    <>
      <div>
      <div className="heading-skill">skill</div>
      <div className="skill-section container">

        <div className="row">
          <div className="skill-item">
            <h5>html</h5>
            <div className="progress">
              <div className="progress-in" style={{width:'80%'}}></div>
              <div className="skill-percent">80%</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="skill-item">
            <h5>css</h5>
            <div className="progress">
              <div className="progress-in" style={{width:'70%'}}></div>
              <div className="skill-percent">70%</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="skill-item">
            <h5>javascript</h5>
            <div className="progress">
              <div className="progress-in" style={{width:'75%'}}></div>
              <div className="skill-percent">75%</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="skill-item">
            <h5>reactjs</h5>
            <div className="progress">
              <div className="progress-in" style={{width:'80%'}}></div>
              <div className="skill-percent">80%</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="skill-item">
            <h5>bootstrap</h5>
            <div className="progress">
              <div className="progress-in" style={{width:'50%'}}></div>
              <div className="skill-percent">50%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
};

export default Skill;