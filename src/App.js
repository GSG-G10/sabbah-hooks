import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import PresentTasks from "./Components/PresentTasks";
import Form from "./Components/Form";

function App() {
  return (
    <Router>
    <div className="App">
     <header>Todo List</header>
     <Form />
    <ul className="tags">
      <li> <Link to="/"> All </Link> </li>
      <li> <Link to="/todo"> To Do </Link> </li>
      <li> <Link to="done"> Done </Link> </li>
    </ul>
    <ul className="todoList" id="todoList">
      <PresentTasks />
    </ul>
    <div className="footer">
      <p className="para">
        As the saying goes, <br /> instead of waiting, why not do it now?
      </p>
      <button id="clear">Clear All</button>
    </div>
    </div>
    </Router>
  );
}

export default App;
