import AddToDo from "./components/AddToDo";
import Todos from "./components/Todos";
import Navbar from "./components/Navbar";
import { RiTodoLine } from "react-icons/ri";
import "./App.css";
const App = () => {
  return (
    <main>
      <div>
        <h1 className="title">
          <RiTodoLine className="icon" />
          TODO APP (REACT + TYPESCRIPT)
          <RiTodoLine className="icon" />
        </h1>
      </div>
      <Navbar />
      <AddToDo />
      <Todos />
      <footer className="footer">
        <p>
          Developed by <span className="developer-name">Wagisha</span>
        </p>
      </footer>
    </main>
  );
};

export default App;
