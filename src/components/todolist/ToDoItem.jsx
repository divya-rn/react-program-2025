export function ToDoItem({ todo, deleteTodo, toggleChecked }) {
    return (
      <tr>
        <td>{todo.toDoId}</td>
        <td>{todo.text}</td>
        <td>
          <input 
            type="checkbox" 
            checked={todo.checked} 
            onChange={() => toggleChecked(todo.toDoId)} 
          />
        </td>
        <td>
          {todo.checked ? (
            <span style={{ color: 'green' }}>✔</span> 
          ) : (
            <span style={{ color: 'red' }}>✘</span> 
          )}
        </td>
        <td>
          <button onClick={() => deleteTodo(todo.toDoId)}>Delete</button>
        </td>
      </tr>
    );
  }