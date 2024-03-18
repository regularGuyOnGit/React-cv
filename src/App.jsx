import './App.css'
import GeneralInfo from './components/GenealInfo'
import Educational from './components/Educational'
import Practical from './components/Practical'
import CvComponent from './components/CvComponent'
import { useState } from 'react'


function App() {

  // ! Gen Info Components state and logic
  const [genInfo, setGenInfo] = useState({ name: 'Nitin Rai', email: 'nitinRai3000@lonki.com', phoneNo: '91-9654808931' })

  const nameChange = (e) => {

    setGenInfo({ ...genInfo, name: (e.target.value) })
  }
  const emailChange = (e) => {

    setGenInfo({ ...genInfo, email: (e.target.value) })
  }
  const phoneNoChange = (e) => {

    setGenInfo({ ...genInfo, phoneNo: (e.target.value) })
  }

    // ! Education Info Components state and logic
    const proLoadedEducationData = [{schoolName : 'Ganesh Shankar',title : '12th', doc : 2016 }]

    const [education,setEducation] = useState(proLoadedEducationData);

    
    const schlNameChange = (e,objectsIndex)=>{
      setEducation([...education.map((eduItems,index)=>{
        if(objectsIndex == index){
         eduItems.schoolName = e.target.value
        }
        return eduItems
      })])
    }
    const titleNameChange = (e,objectsIndex)=>{
      setEducation([...education.map((eduItems,index)=>{
        if(objectsIndex == index){
         eduItems.title = e.target.value
        }
        return eduItems
      })])
    }
    const docChange = (e,objectsIndex)=>{
      setEducation([...education.map((eduItems,index)=>{
        if(objectsIndex == index){
         eduItems.doc = e.target.value
        }
        return eduItems
      })])
    }
    const educationAddition = (newEducationObj)=>{
      setEducation([...education,newEducationObj])
    }
    const deleteInputField = (e,objectIndex)=>{
      e.preventDefault()
      setEducation([...education.filter((items,index)=>{
    if(index !=objectIndex){
      return items
    } 
    
      })])
    
    }

    // !Practicals states
    const preLoadedPractical = [{ companyName: 'MicroSoft', position: 'SDE', yoe: 1, ric: "Nothing" }]
    const [practical, setPractical] = useState(preLoadedPractical);
  
    const companyNameChange = (e, objectsIndex) => {
      setPractical([...practical.map((pracItems, index) => {
        if (objectsIndex == index) {
          pracItems.companyName = e.target.value
        }
        return pracItems
      })])
    }
    const positionNameChange = (e, objectsIndex) => {
      setPractical([...practical.map((pracItems, index) => {
        if (objectsIndex == index) {
          pracItems.position = e.target.value
        }
        return pracItems
      })])
    }
    const yoeChange = (e, objectsIndex) => {
      setPractical([...practical.map((pracItems, index) => {
        if (objectsIndex == index) {
          pracItems.yoe = e.target.value
        }
        return pracItems
      })])
    }
    const ricChange = (e, objectsIndex) => {
      setPractical([...practical.map((pracItems, index) => {
        if (objectsIndex == index) {
          pracItems.ric = e.target.value
        }
        return pracItems
      })])
    }
    const practicalAddition = (newPracticalObj) => {
      setPractical([...practical, newPracticalObj])
    }
    const praDeleteInputField = (e, objectIndex) => {
      e.preventDefault()
      setPractical([...practical.filter((items, index) => {
        if (index != objectIndex) {
          return items
        }
  
      })])
  
    }
  

  return (
    <>
      <div className="userInput">
        <GeneralInfo genInfo={genInfo} nameChange={nameChange} emailChange={emailChange} phoneNoChange={phoneNoChange} />
        <Educational education = {education} deleteInputField={deleteInputField} educationAddition= {educationAddition} docChange= {docChange} schlNameChange ={schlNameChange} titleNameChange= {titleNameChange} />
        <Practical practical={practical} deleteInputField={praDeleteInputField} practicalAddition={practicalAddition}  ricChange={ricChange} yoeChange={yoeChange} positionNameChange={positionNameChange} companyNameChange={companyNameChange}/>
      </div>
      <div className="cvDisplay">
    <CvComponent genInfo={genInfo} educationInfo={education} practicalInfo={practical}/>

      </div>
    </>
  )
}

export default App
