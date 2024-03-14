
import '../styles/genInfo.css'
function GeneralInfo ({info,nameChange,emailChange,phoneNoChange}){

return (<form className="genInfo  ">

    <h3>General Info</h3>

    <label htmlFor="name"> Name : 
        <input id="name" type="text" value = {info.name} onChange = {(e)=>nameChange(e)} />
    </label>

    <label htmlFor="email"> Email : 
        <input id="email" type="email" value = {info.email} onChange = {(e)=>emailChange(e)} />
    </label>
    <label htmlFor="phoneNo"> Phone : 
        <input type="tel" name="" id="phoneNo" value = {info.phoneNo} onChange = {(e)=>phoneNoChange(e)} />
    </label>
</form>)
}

export default GeneralInfo