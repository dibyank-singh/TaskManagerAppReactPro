import React ,{useState,useEffect}from 'react'
import Popupcard from '../popup/Popupcard'
import Taskcard from './Taskcard'

const TaskManager = () => {
    const [modal, setModal] = useState(false);
    const toggle=()=> setModal(!modal)

    const [alldetails ,setAlldetails]=useState([])

    useEffect(() => {
        let strarr=localStorage.getItem("localitems")
         if(strarr){
             let strobj=JSON.parse(strarr)
             setAlldetails(strobj)
         }

    }, [])


     const updatelistarray=(obj , index)=>{
   
       let templist=alldetails
       templist[index]=obj
       localStorage.setItem("localitems", JSON.stringify(templist))
       setAlldetails(templist)
       window.location.reload()



     }

     const deletetask=()=>{
         let delearr=alldetails
         delearr.splice("index", 1)
         localStorage.setItem("localitems" ,JSON.stringify(delearr))
         setAlldetails(delearr)
         window.location.reload()
     }

     const savealltask=(alltask)=>{
       let arraylist=alldetails
       arraylist.push(alltask)
       localStorage.setItem("localitems" , JSON.stringify(arraylist))
       setAlldetails(arraylist)
       setModal(false)
     }
     console.log(alldetails)
    return (
        <>
        <div className="Headerstyle text-center ">
            <h3>Task Manager</h3>
            <button className="btnstyle btn btn-primary mt-2" onClick={()=>setModal(true)}>Create Task</button>
        </div>
        <div className="cardstyle">
          {
                 alldetails.map((val , index)=>

               <Taskcard  val={val} index={index} deletetask={deletetask} updatelistarray={updatelistarray}/>
                )}
               
          
        </div>
        <Popupcard
          toggle={toggle} modal={modal} savealltask={savealltask}

        />
        </>
    )
}

export default TaskManager;
 