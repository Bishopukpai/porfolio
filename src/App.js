import logo from './logo.svg';
import './App.css';
import About from './Components/About/About'
import Projects from './Components/Project/Project';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
          <About/>
        </Route>
        <Route exactpath="/Projects">
          <Projects/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
