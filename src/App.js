import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Home from "./Pages/Home"
import Login from './Pages/Login';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch } from "react-router-dom"
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      
      <Router >
        <Switch>
          <Route component={Home} exact path="/"/>
          <Route component={Login} exact path="/login"/>  
        </Switch>  
      </Router>
    </div>
  );
}

export default App;
