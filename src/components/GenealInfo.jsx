
import { useState } from 'react'
import '../styles/genInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown,faAngleDoubleUp } from '@fortawesome/fontawesome-free-solid'


function GeneralInfo ({genInfo,nameChange,emailChange,phoneNoChange}){

    const [displayBtn,setDisplayBtn] = useState(false)
   
    return (<div className='genInfo'>

    <h3 className='genInfoHeading'>General Info</h3>
    {displayBtn &&  <form className="genInfo  ">

<label htmlFor="name"> Name : 
    <input id="name" type="text" value = {genInfo.name} onChange = {(e)=>nameChange(e)} />
</label>

<label htmlFor="email"> Email : 
    <input id="email" type="email" value = {genInfo.email} onChange = {(e)=>emailChange(e)} />
</label>
<label htmlFor="phoneNo"> Phone : 
    <input type="tel" name="" id="phoneNo" value = {genInfo.phoneNo} onChange = {(e)=>phoneNoChange(e)} />
</label>
</form>}
{displayBtn&& <button className='displayBtnUp' onClick={(e)=>setDisplayBtn(false)}><FontAwesomeIcon icon={faAngleDoubleUp}/></button>}
{!displayBtn && <button className='displayBtnDown' onClick={(e)=>setDisplayBtn(true)}><FontAwesomeIcon icon={faAngleDoubleDown}/></button>}

    
   </div>)
}

export default GeneralInfo