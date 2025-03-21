import { FormEvent, useState } from "react";
import { useTodos } from "../store/Todos";
const AddToDo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim()) {
      // Only add if todo is not empty or just whitespace
      handleAddTodo(todo);
      setTodo("");
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" disabled={!todo.trim()}>
        Add
      </button>
    </form>
  );
};

export default AddToDo;
