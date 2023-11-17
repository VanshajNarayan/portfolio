import "./Education.css";
import { GiCalendarHalfYear } from 'react-icons/gi';

const Education = () => {
  return (
    <>
      <span className="heading">education</span>
      <div className="education-card">
        <div className="first-card card">  
        <span className='bullet'></span>
        <div className='years'> <GiCalendarHalfYear/> 2017</div>
        <div><p className='degree'>Matric degree - <span>bseb</span></p></div>
        <div><p className='about-degree'>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Quas, sed neque. Repudiandae, neque ea. Minima atque ducimus at!</p></div>
        </div>
        <div className="second-card card">  
        <span className='bullet'></span>
        <div className='years'> <GiCalendarHalfYear/> 2018-2021</div>
        <div><p className='degree'>diploma degree - <span>jharkhand university</span></p></div>
        <div><p className='about-degree'>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Quas, sed neque. Repudiandae, neque ea. Minima atque ducimus at!</p></div>
        </div>
        <div className="third-card card">  
        <span className='bullet'></span>
        <div className='years'> <GiCalendarHalfYear/> 2021-2024</div>
        <div><p className='degree'>b.tech degree - <span>jharkhand university</span></p></div>
        <div><p className='about-degree'>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Quas, sed neque. Repudiandae, neque ea. Minima atque ducimus at!</p></div>
        </div>
    </div>
    </>
  )
};

export default Education;