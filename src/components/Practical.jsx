import '../styles/practical.css'

export default function Practical({info,companyNameChange,positionChange,yoeChange,ricChange}) {
  return (
    <form className = "practical">

    <h3>Practical Experience</h3>

    <label htmlFor="companyName"> Company Name :
        <input type="text"  id="companyName" value = {info.companyName} onChange = {(e)=>companyNameChange(e)} />
    </label>

    <label htmlFor="position"> Postion : 
        <input type="text"  id="position"  value = {info.position} onChange = {(e)=>positionChange(e)}/>
    </label>

    <label htmlFor="yoe">  Years Of Experience :
        <input type="text"  id="yoe" value = {info.yoe}  onChange = {(e)=>yoeChange(e)} />
    </label>
    <label htmlFor="ric">  Role In The Company :
        <input type="text"  id="yoe" value = {info.ric}  onChange = {(e)=>ricChange(e)} />
    </label>
  
</form>
 
  );
}
