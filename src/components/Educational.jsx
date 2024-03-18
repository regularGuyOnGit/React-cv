import { useState } from 'react';
import '../styles/education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faAngleDoubleDown} from '@fortawesome/fontawesome-free-solid'
import EducationForm from './EducationForm';


export default function Educational({education,deleteInputField,educationAddition,docChange,schlNameChange,titleNameChange}) {

  const [btn,setBtn] = useState (false)

  return (
<div className = "education">
<h3>Eductional Qualification</h3>

    {education && education.map((eduItems,index)=>{
          return <form key={index} className = "education">

           <label htmlFor="schoolName"> Institution's Name :
               <input type="text" id="schoolName" value = {eduItems.schoolName} onChange={(e)=>{schlNameChange(e,index)}}  />
           </label>
   
           <label htmlFor="title"> Title Of Study : 
               <input type="text"  id="title"  value = {eduItems.title} onChange={(e)=>{titleNameChange(e,index)}}/>
           </label>
   
           <label htmlFor="completion">  Date Of Completion :
               <input type="text"  id="completion" value = {eduItems.doc}  onChange={(e)=>{docChange(e,index)}} />
           </label>

           <button id='deletebtn' onClick={(e)=>deleteInputField(e,index)}><FontAwesomeIcon icon={faTrash}/></button>
       </form>
    })}
   {!btn && <button onClick={()=> setBtn(true)}><FontAwesomeIcon icon={faAngleDoubleDown}/></button>}
    {btn && < EducationForm  btnChange={()=>setBtn(false)} educationAddition = {educationAddition} /> }


</div>



 
  );
}
