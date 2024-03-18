import '../styles/practical.css'
import { useState } from 'react';
import PracticalForm from './PracticalForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faAngleDoubleDown } from '@fortawesome/fontawesome-free-solid'





export default function Practical({practical,deleteInputField,practicalAddition,ricChange,yoeChange,positionNameChange,companyNameChange}) {
  const [btn, setBtn] = useState(false)

 

  return (
    <div className="practical">
      <h3>Practical Experience</h3>

      {practical && practical.map((practicalObjects, index) => {
        return <form key={index} className="practical">


          <label htmlFor="companyName"> Company Name :
            <input type="text" id="companyName" value={practicalObjects.companyName} onChange={(e) => companyNameChange(e, index)} />
          </label>

          <label htmlFor="position"> Postion :
            <input type="text" id="position" value={practicalObjects.position} onChange={(e) => positionNameChange(e, index)} />
          </label>

          <label htmlFor="yoe">  Years Of Experience :
            <input type="text" id="yoe" value={practicalObjects.yoe} onChange={(e) => yoeChange(e, index)} />
          </label>
          <label htmlFor="ric">  Role In The Company :
            <input type="text" id="ric" value={practicalObjects.ric} onChange={(e) => ricChange(e, index)} />
          </label>

          <button id='deletebtn' onClick={(e) => deleteInputField(e, index)}><FontAwesomeIcon icon={faTrash} /></button>

        </form>
      })}
      {!btn && <button onClick={() => setBtn(true)}><FontAwesomeIcon icon={faAngleDoubleDown} /></button>}
      {btn && < PracticalForm btnChange={() => setBtn(false)} practicalAddition={practicalAddition} />}
     
    </div>


  );
}
