import '../styles/education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave} from '@fortawesome/fontawesome-free-solid'
// import { useState } from 'react'

export default function PracticalForm({practicalAddition,btnChange}) {


  const addNewPractical =  ()=> {

    let practical = {}
  
    const companyName = (e)=> {
        practical.companyName = e.target.value
    }
    const position = (e)=>{
        practical.position = e.target.value
    }
    const yoe = (e)=>{
        practical.yoe = e.target.value
    }
    const ric = (e)=>{
        practical.ric = e.target.value
    }
    
    const save = (e)=>{
      e.preventDefault()
      btnChange()
      practicalAddition(practical)
  
      // It will save it to the education main state
    }
  
  return {companyName,yoe,position,save,ric}
  
   }
  const practicalMethods = addNewPractical();
  

  return (
    
<form className = "practical">

<label htmlFor="companyName"> Company Name :
    <input type="text"  id="companyName" onChange = {e => practicalMethods.companyName(e)} />
</label>

<label htmlFor="position"> Postion : 
    <input type="text"  id="position" onChange = {e => practicalMethods.position(e)}/>
</label>

<label htmlFor="yoe">  Years Of Experience :
    <input type="text"  id="yoe"  onChange = {e => practicalMethods.yoe(e)} />
</label>
<label htmlFor="ric">  Role In The Company :
    <input type="text"  id="ric"   onChange = {e => practicalMethods.ric(e)} />
</label>

<button type="submit" id='wrapperBtn' onClick = {(e)=>practicalMethods.save(e)}><FontAwesomeIcon icon={faSave}/></button>

</form>

  );
}
