import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Popupcard = ({modal , toggle , savealltask}) => {
   
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

    const saverhandler=()=>{
       
        let alltask={}
        alltask["fullname"]=name
        alltask["abilityname"]=ability
        alltask["taskname"]=task
        savealltask(alltask)
        
    
    }
    return (
        <>
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Create Your Task</ModalHeader>
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
          <Button color="primary" onClick={saverhandler}>Save Task</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
        </Modal>

        </>
            
        
    )
}

export default Popupcard;
