import React, { useState , useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Editcard = ({modal , toggle ,savealltask, updatetask,val}) => {
   
     const [name , setName]=useState('')
     const [ability , setAbility]=useState('')
     const [task , setTask]=useState('')
     
    const changehandler =(event)=>{
    const {name,value}=event.target
    if(name==="fullname"){
        setName(value)
    }else if (name==="abilityname"){
        setAbility(value)
    }else if (name==="taskname"){
        setTask(value)
    }
    }

   useEffect(() => {
       
      setName(val.fullname)
      setAbility(val.abilityname)
      setTask(val.taskname)


   }, [])

    const updatehandler=(defltevent)=>{
       
    defltevent.preventDefault();
    let updateobj={}
    updateobj["fullname"]=name
    updateobj["abilityname"]=ability
    updateobj["taskname"]=task
    updatetask(updateobj)
    
    }
    return (
        <>
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Update Your Task</ModalHeader>
        <ModalBody>
         <form action="">
         <div class="mb-3">
           <label for="exampleFormControlInput1" class="form-label"> Name</label>
         <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" value={name} onChange={changehandler} name="fullname"/>
          </div>
          <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Ability</label>
           <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="EX-Programing"value={ability}  onChange={changehandler} name="abilityname"/>
          </div>
          <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Task</label>
           <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="EX-Fix bug in App" value={task}  onChange={changehandler} name="taskname"/>
          </div>
         </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={updatehandler}>Update the Task</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
        </Modal>

        </>
            
        
    )
}
 
export default Editcard;
