import Fetch from "./components/fetch";
import Nav from "./components/nav";
import TodoList from "./components/todoList";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Fetch/>
      <TodoList/>
    </div>
  );
}

export default App;
