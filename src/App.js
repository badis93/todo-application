import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  deleteTodo,
  completeTodo,
  addTodo,
  saveTodo,
  updateTodo,
} from "./actions/todosActions";

function App() {
  const todos = useSelector((state) => state.todosReducer.todos);
  const save = useSelector((state) => state.todosReducer.save);
  const [input, setInput] = useState("");
  useEffect(() => {
    if (save) setInput(save.title);
  }, [save]);
  const dispatch = useDispatch();
  return (
    <div className="App-header">
      <div>
        <input
          value={input}
          type="text"
          placeholder="add a todo"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => {
            if (save) dispatch(updateTodo(input));
            else
              dispatch(
                addTodo({
                  id: uuidv4(),
                  title: input,
                  isCompleted: false
                })
              );
            setInput("");
          }}
        >
          {save ? "Update" : "Add"}
        </button>
      </div>
      {todos.map((el,id) => (
        <div key={id}>
          <h1 style={{ textDecoration: el.isCompleted ? "line-through" : "" }}>{el.title}</h1>
          <button onClick={() => dispatch(completeTodo(id))}>Complete</button>
          <button onClick={() => dispatch(deleteTodo(el.id))}>Delete</button>
          <button onClick={() => dispatch(saveTodo(el))}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default App;
