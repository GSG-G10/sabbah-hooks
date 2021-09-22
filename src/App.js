import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from "react";
import './App.css';
import PresentTasks from "./Components/PresentTasks";
import Form from "./Components/Form";
import Footer from "./Components/Footer";


function App() {
  const [taskAdded, setTaskAdded] = useState(false) // state for rerendering data
  const [active, setActive] = useState(false) 
  return (
    <Router>
    <div className="App">
     <header>Todo List</header>
     <Form taskAdded= {taskAdded} setTaskAdded = {setTaskAdded}/>
    <ul className="tags">
      <li> <Link to="/"> All </Link> </li>
      <li> <Link to="/todo"> To Do </Link> </li>
      <li> <Link to="done"> Done </Link> </li>
    </ul>
    <ul className="todoList" id="todoList">
    <Switch>
      <Route exact path='/'>
      <PresentTasks type='all' taskAdded= {taskAdded} setTaskAdded = {setTaskAdded} active={active} setActive={setActive} />
      </Route>

      <Route exact path='/todo'>
      <PresentTasks type='todo' taskAdded= {taskAdded} setTaskAdded = {setTaskAdded} active={active} setActive={setActive} />
      </Route>

      <Route exact path='/done'>
      <PresentTasks type='done' taskAdded= {taskAdded} setTaskAdded = {setTaskAdded} active={active} setActive={setActive} />
      </Route>
      <Route>
        <p>
          Not Found Path
        </p>
      </Route>
      </Switch>
    </ul>
    <Footer taskAdded= {taskAdded} setTaskAdded = {setTaskAdded}  active={active} setActive={setActive}/>
    </div>
    </Router>
  );
}

export default App;
