import  '../styles/cvComponent.css'

export default function CvComponent({genInfo,educationInfo,practicalInfo}) {
  let educationInfoLength = educationInfo.length-1
  let practicalInfoLength = practicalInfo.length-1
  return (
    <div className="cvUserInterface">
        <div className="genInfoCv">
          <ul>
            <li>Name : {genInfo.name}</li>
            <li>Email  :  {genInfo.email} </li>
            <li>Phone No : {genInfo.phoneNo}</li>
          </ul>
        </div>
        <div className="educationInfoCv">
          {educationInfo.map((eduItems,index)=>{
            return <ul key={index}>
              <li>Institute's Name : {eduItems.schoolName}</li>
              <li>Title : {eduItems.title}</li>
              <li>  Date Of Completion: {eduItems.doc}</li>
                  {educationInfoLength>index ? <hr/> : null}
            </ul>
          })}
        </div>
        <div className="practicalInfoCv">
{practicalInfo.map((pracItems,index)=>{
  return <ul key={index}>
    <li>Comapany Name : {pracItems.companyName}</li>
    <li>Position : {pracItems.position}</li>
    <li>Years Of Experience : {pracItems.yoe}</li>
    <li>Role In Company : {pracItems.ric}</li>
    {practicalInfoLength>index ? <hr/> : null}
  </ul>
})}

        </div>
      
    </div>
  );
}
