import React, {useState} from "react";

function App(){

    const [todoText,setTodoText]=useState("")
    const [todoList,setTodoList]=useState([])
    const add=()=>{
        if(todoText!=""){
            setTodoList([...todoList,{
                id:todoList+1,
                name:todoText
            }])
            setTodoText("")
        }else{
            alert("Please list something...")
        }

    }
    const deleteItem=(id)=>{
        const deleteId=id;
        let confirm= window.confirm("Are  you sure to delete")
        if(confirm){
            const filterList= todoList.filter((data)=>data.id !== id)
            setTodoList(filterList)
        }
    }
    const editItem=(editId,editName)=>{
        const newValue= prompt("Edit todo Item",editName)
        const editList=todoList.map((data)=>{
            if(data.id===editId){
                data.name=newValue
            }
            return data
        })
        setTodoList(editList)
    }

  return(
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="border border-1 rounded p-4 mt-5">
                <h2 className="text-center mb-3">React Todo List</h2>
                <div className="d-flex justify-content-between align-items-center">
                    <input value={todoText} onChange={(event) => setTodoText(event.target.value)} type="text" placeholder="Say Something..." className="form-control"/>
                    <button onClick={()=>add()} className="btn btn-primary">
                        <i className="fa-solid fa-circle-plus"></i>
                    </button>
                </div>

                    <ul className="list-group mt-5">
                        {
                            todoList.map(data=>{
                                return(
                                    <li key={data.id} className="list-group-item d-flex justify-content-between align-items-center animate__animated animate__slideInDown">
                                        <p className="m-0">{data.name}</p>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <button onClick={()=>editItem(data.id,data.name)} className="btn btn-sm btn-warning">
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </button>
                                            <button onClick={()=>deleteItem(data.id)} className="btn btn-sm btn-danger ms-2">
                                                <i className="fa-solid fa-trash-can"></i>
                                            </button>
                                        </div>
                                    </li>

                                )
                            })
                        }
                    </ul>

            </div>
          </div>
        </div>
      </div>
  )
}
export default App