import { useState } from "react";
import { ToDoItem } from "./ToDoItem";

export function ToDoList() {
    const [newTodo, setNewTodo] = useState("");  
    const [allToDo, setAllToDo] = useState([]);  
    const [currentId, setCurrentId] = useState(1);  
    const [filterText, setFilterText] = useState(""); 
  
    
    const handleAddTodo = () => {
      if (newTodo.trim()) {
        const newToDoItem = {
          toDoId: currentId, 
          text: newTodo,
          checked: false 
        };
  
        setAllToDo([...allToDo, newToDoItem]);
        setNewTodo("");  
        setCurrentId(currentId + 1);
      }
    };
  
   
    const deleteTodo = (id) => {
      setAllToDo(allToDo.filter(todo => todo.toDoId !== id));
    };
  
    
    const toggleChecked = (id) => {
      setAllToDo(allToDo.map(todo => 
        todo.toDoId === id ? { ...todo, checked: !todo.checked } : todo
      ));
    };
  
    
    const filteredTodos = allToDo.filter(todo => 
      todo.text.toLowerCase().includes(filterText.toLowerCase())
    );
  
    return (
      <>
        <div>
          <input 
            type="text" 
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)} 
            placeholder="Add a new todo" 
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
  
        <div>
          <input 
            type="text" 
            value={filterText} 
            onChange={(e) => setFilterText(e.target.value)} 
            placeholder="Filter tasks" 
          />
        </div>
  
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>ToDo</th>
              <th>Checkbox</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTodos.length > 0 ? (
              filteredTodos.map((todo) => (
                <ToDoItem 
                  key={todo.toDoId} 
                  todo={todo} 
                  deleteTodo={deleteTodo} 
                  toggleChecked={toggleChecked} 
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>
                  No Tasks Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </>
    );
  }