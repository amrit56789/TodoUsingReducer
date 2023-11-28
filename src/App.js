import { AddTodo } from "./Component/AddTodo";
import { Todos } from "./Component/Todos";

function App() {
  return (
    <div className="mx-10 my-10">
      <Todos />
      <AddTodo />
    </div>
  );
}

export default App;
