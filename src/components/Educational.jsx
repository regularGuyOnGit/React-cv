import '../styles/education.css'

export default function Educational({info,schlNameChange,docChange,titleChange}) {
  return (
    <form className = "education">

        <h3>Eductional Qualification</h3>

        <label htmlFor="schoolName"> Institution's Name :
            <input type="text"  id="schoolName" value = {info.schoolName} onChange = {(e)=>schlNameChange(e)} />
        </label>

        <label htmlFor="title"> Title Of Study : 
            <input type="text"  id="title"  value = {info.title} onChange = {(e)=>titleChange(e)}/>
        </label>

        <label htmlFor="completion">  Date Of Completion :
            <input type="text"  id="completion" value = {info.doc}  onChange = {(e)=>docChange(e)} />
        </label>
      
    </form>
  );
}
