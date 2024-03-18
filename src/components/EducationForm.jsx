import '../styles/education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave} from '@fortawesome/fontawesome-free-solid'

export default function EducationForm({educationAddition,btnChange}) {


  const addNewEducation =  ()=> {

    let education = {}
  
    const schoolName = (e)=> {
      education.schoolName = e.target.value
    }
    const title = (e)=>{
      education.title = e.target.value
    }
    const doc = (e)=>{
      education.doc = e.target.value
    }
    
    const save = (e)=>{
      e.preventDefault()
      btnChange()
      educationAddition(education)
  
      // It will save it to the education main state
    }
  
  return {schoolName,title,doc,save,education}
  
   }
  const educationMethods = addNewEducation();
  

  return (
    

<form className = "education">
<label htmlFor="schoolName"> Institution's Name :
    <input type="text"  id="schoolName" onChange = {e => educationMethods.schoolName(e)}  />
</label>

<label htmlFor="title"> Title Of Study : 
    <input type="text"  id="title"  onChange = {e => educationMethods.title(e)}  />
</label>

<label htmlFor="completion"> Date Of Completion :
    <input type="text"  id="completion"  onChange = {e => educationMethods.doc(e)}/>
</label>

{/* Here are two buttons say one is for save into the central state managed by the App component */}
<button type="submit" id='wrapperBtn' onClick = {(e)=>educationMethods.save(e)}><FontAwesomeIcon icon={faSave}/></button>

{/* One button which adds next object into the arrays of object */}
</form>

  );
}
