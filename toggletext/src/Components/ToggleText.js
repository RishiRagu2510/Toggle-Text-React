import React,{useState} from 'react'

const ToggleText = () => {
    const[TextOne,setTextOne]=useState(true);
  return (
    <div>
    <center>
    <p>{TextOne? "MSD Captain Cool":"Helicopter Man"}</p>
    <button id="toggle" onClick={()=>(setTextOne(!TextOne))}>Click me to change</button>    
    </center>
    </div>
  )
}

export default ToggleText