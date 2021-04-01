import React, { useState } from 'react'
import Editcard from '../popup/Editcard'




const Taskcard = ({val, index,deletetask , updatelistarray}) => {

    const [modal , setModal]=useState(false);
  
    const toggle=()=>{
        setModal(!modal)
    }
  
  
   const updatetask=(obj)=>{

    updatelistarray(obj , index)

   }

    const handleDelete =()=>{
        deletetask(index)
    }

    return (
        <div class = "card-wrapper mr-4">
            <div class = "card-top" style={{"background-color": "#f8cdda"}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": "#ffffff", "border-radius": "10px" , "textTransform":"capitalize"}}>  {val.fullname}</span>
                <span class = "card-header" style={{"background-color": "#dae2f8", "border-radius": "10px","textTransform":"capitalize"}}>{val.abilityname}</span>
                <span class = "card-header" style={{"background-color": "#CCCCB2" , "border-radius": "10px","textTransform":"capitalize"}}>{val.taskname}</span>
                {/* <p className = "mt-3">{taskObj.Description}</p> */}

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "12px"}}>
                    <i class = "far fa-edit mr-3" style={{"color" :"#a044ff" , "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : "#00C9FF", "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <Editcard modal = {modal} toggle = {toggle} updatetask = {updatetask} val = {val}/>
        </div>
    )
}

export default Taskcard;
