import {useState} from "react"; 

function Todos(){
    const [todos, setTodos] = useState("");
     const [todosList, setTodosList] = useState([]);

     const addTodos = () => {
        setTodosList([...todosList, todos]);
        console.log(todosList);
        setTodos("");
     }

     const deleteTodos =(index) => {
        setTodosList(todosList.filter((value, i) => i !== index));
     }

    return(
        <>
          <h1>Add your Todos</h1>
            <input type="text" placeholder="Enter a new todo" value={todos} onChange={(e) =>{setTodos(e.target.value)}}/>
            <p>{todos}</p>
            <button type="submit" onClick={addTodos}>Click To Add the Todos in Your daily Set</button>
             <h1>Your Todos list</h1>
            <ul>
                {todosList.map((todo,index) =>{
                    return <li key={index}>{todo}  <button onClick={() => deleteTodos(index)}>Delete</button></li>
                })}
            </ul>
        </>
    )

}

export default Todos;