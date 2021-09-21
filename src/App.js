import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
     <header>Todo List</header>
    <div className="inputs">
      <input type="text" placeholder="Add your new task" id="inputFeild" />
      <button id="add"> Add <i className="fas fa-plus"></i></button>
    </div>
    <ul class="tags">
      <li> <Link to="/"> All </Link> </li>
      <li> <Link to="/todo"> To Do </Link> </li>
      <li> <Link to="done"> Done </Link> </li>
    </ul>
    <ul class="todoList" id="todoList">
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
