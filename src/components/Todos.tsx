import { Todo, useTodos } from "../store/Todos";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("todos");
  let filterData = todos;

  if (todosData === "active") {
    filterData = todos.filter((todo: Todo) => !todo.completed);
  }

  if (todosData === "completed") {
    filterData = todos.filter((todo: Todo) => todo.completed);
  }

  return (
    <ul className="main-task">
      {filterData.map((todo: Todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => {
                toggleTodoAsCompleted(todo.id);
              }}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {todo.completed && (
              <button
                type="button"
                onClick={() => {
                  handleDeleteTodo(todo.id);
                }}
              >
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
