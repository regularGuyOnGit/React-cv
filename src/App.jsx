import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faSave } from '@fortawesome/fontawesome-free-solid'
import './App.css'
import GeneralInfo from './components/GenealInfo'
import Educational from './components/Educational'
import Practical from './components/Practical'
import Cv from'./components/Cv'

function App() {


const [genInfo,setGenInfo] = useState({name : 'Nitin Rai', email : 'nitinRai3000@lonki.com', phoneNo : '91-9654808931' })
const[education,setEducation] = useState({schoolName : 'Ganesh Shankar',title : '12th', doc : 2016})
const[experience,setExperience] = useState({companyName : 'MicroSoft',position :'SDE', yoe : 1,ric : "Nothing" })
const [btn,setBtn] = useState (false)

const nameChange = (e)=>{

  setGenInfo({...genInfo,name : (e.target.value)})
}
const emailChange = (e)=>{

  setGenInfo({...genInfo,email : (e.target.value)})
}
const phoneNoChange = (e)=>{

  setGenInfo({...genInfo,phoneNo : (e.target.value)})
}
const schoolNameChange = (e)=>{

  setEducation({...education,schoolName : (e.target.value)})
}
const titleChange = (e)=>{

  setEducation({...education,title : (e.target.value)})
}
const docChange = (e)=>{

  setEducation({...education,doc : (e.target.value)})
}
const companyNameChange = (e)=>{

  setExperience({...experience,companyName : (e.target.value)})
}
const positionChange = (e)=>{

  setExperience({...experience,position : (e.target.value)})
}
const yoeChange = (e)=>{

  setExperience({...experience,yoe : (e.target.value)})
}
const ricChange = (e)=>{

  setExperience({...experience,ric : (e.target.value)})
}


const submitBtn  = (e)=>{
setBtn(true);



}
const resetBtn = (e)=>{
  setBtn(false)
  setGenInfo({name : '', email : '', phoneNo : '' })
setEducation({schoolName : '',title : '', doc : ""})
setExperience({companyName : '',position :'', yoe : "",ric : "" })
}




  return (
    <>
    <div className="userInput">
      <GeneralInfo  info = {genInfo} nameChange = {nameChange} emailChange = {emailChange}  phoneNoChange= {phoneNoChange}   />
      <Educational   info= {education} schlNameChange = {schoolNameChange} docChange = {docChange} titleChange= {titleChange}  />
      <Practical   info= {experience} companyNameChange = {companyNameChange} positionChange = {positionChange} yoeChange= {yoeChange} ricChange = {ricChange} />
      <div className = "btns">
      <button  onClick = {submitBtn}><FontAwesomeIcon icon={faSave}/></button>
      <button  onClick = {resetBtn}><FontAwesomeIcon icon={faTrash}/></button>
      </div>
    </div>


    <div className="cvDisplay" >
         {btn && <Cv  info = {genInfo} education = {education}  experience={experience} />}
    </div>
    </>
  )
}

export default App
