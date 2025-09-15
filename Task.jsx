import{useState} from "react";

function Task(){
    const [name, setName] = useState(" ");
    const [savename, setsavename] =useState(" ");
    const [saveID, setsaveID] =useState(" ");
    const [ID, setID] = useState(" ");
    // const userID = localStorage.getItem("userID");
    // localStorage.setItem("username",name);
    const save = () =>{
            const savedname = JSON.parse(localStorage.getItem("username") || "[]");
        if(name){
            const newname = { id: Date.now(),name: name , Id:ID} 
            savedname.push(newname)
            localStorage.setItem("username",JSON.stringify(savedname));
        }
        if (savedname) 
            {
                setSavedname(storedName);
            }
        if (userId) {
            setSavedID(userID);
        }
        }; 
    return(
        <div>
            <div>Enter name:
            <input type="text"
            placeholder ="Enter Name"
            value={name}
            onChange= {(e) =>setName(e.target.value)}
            />
            </div>
            
            <div>Enter ID:
            <input type="text"
            placeholder ="Enter ID"
            value={ID}
            onChange= {(e) =>setID(e.target.value)}
            />
            </div>
            <button onClick={save}>Submit</button>
        </div>

    );  
}
    export  default Task;