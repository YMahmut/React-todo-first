import './App.css';
import {useState} from "react";

function App() {
  const [newTodo,setNewTodo]=useState("");
  const [todoList,setTodoList]=useState([]);

  const updateInput = (e)=>{
      setNewTodo(e.target.value)
  }
  const addItem = ()=>{
      setTodoList(previous=>[...previous,newTodo]);
      setNewTodo("");
  }
  const deleteTodo = (i)=>{
      const updatedList = todoList.filter((t,indx)=>indx !== i);
      setTodoList(updatedList);
  }
  const editTodo = (i)=>{
      let UpdatedList = todoList.filter((t,index)=>index !== i);
      UpdatedList.splice(i,0,newTodo);
      setTodoList(UpdatedList);
      setNewTodo("");
  }
  return (
    <div className="App">
      <header className="App-header">
          <div className={'d-flex-row'}>
              <input type="text" value={newTodo} onChange={updateInput}/>
              <span>
              <button onClick={addItem}>ekle</button>
          </span>
          </div>

        <div>{todoList.map((t,i)=>(
            <div className={'todo'} key={i}>
                <span className={'todo-content'}>{t}</span>
                <span className={'edt-dlt-btn'}>
                    <div className={'edt-btn-wrapper'}>
                        <button className={'edt-btn'} onClick={()=>deleteTodo(i)}>delete</button>
                    </div>
                    <div className={'dlt-btn-wrapper'}>
                        <button className={'dlt-btn'} onClick={()=>editTodo(i)}>edit</button>
                    </div>
                </span>
            </div> ))}
        </div>
      </header>
    </div>
  );
}

export default App;
