import { createContext, useContext, useState } from "react";

export type TodosProviderProps = {
  children: React.ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContext = {
  todos: Todo[];
  handleAddTodo: (task: string) => void; // call signature
  toggleTodoAsCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};
export const TodosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const newTodos = localStorage.getItem("todos") || "[]";
      return JSON.parse(newTodos) as Todo[];
    } catch (error) {
      console.log(error);
      return [];
    }
  });

  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  //mark completed
  const toggleTodoAsCompleted = (id: string) => {
    setTodos((prev: Todo[]) => {
      const newTodos = prev.map((todo: Todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  //delete todo
  const handleDeleteTodo = (id: string) => {
    setTodos((prev: Todo[]) => {
      const newTodos = prev.filter((filterTodo: Todo) => filterTodo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };
  return (
    <TodosContext.Provider
      value={{ todos, handleAddTodo, toggleTodoAsCompleted, handleDeleteTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};

//consumer
export const useTodos = () => {
  const todosConsumer = useContext(TodosContext);
  if (!todosConsumer) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return todosConsumer;
};
