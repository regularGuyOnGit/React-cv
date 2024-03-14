import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/fontawesome-free-solid'


import '../styles/cv.css'

export default function Cv({info,education,experience}) {
  return (
    <div className="cvTemplate">

      <div className="cvInfo">
        <p>{info.name}</p>
        <p>{education.position}</p>
        <p>{info.phoneNo}</p>
        <p>{info.email}</p>
      </div>
      <div className="profilePhoto">
       
        <div><FontAwesomeIcon icon={faImage}/></div>
      </div>
      <ul className="cvEducation">
        <h2>Education</h2>
        <li> School Name  &#8620; {education.schoolName} </li>
        <li> Title &#8620; {education.title} </li>
        <li> Date Of Completion &#8620; {education.doc} </li>
      </ul>
      <ul className="cvWork">
        <h2>Work Experience</h2>
        <li> Company Name &#8620; {experience.companyName} </li>
        <li>Years Of Experience&#8620; {experience.yoe} </li>
        <li>Role In Company  &#8620; {experience.ric} </li>
      </ul>
      {/* <div className="skills"></div>
      <div className="certificates"></div> */}
    </div>
  );
}
