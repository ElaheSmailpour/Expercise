
import React from "react"
import {
  BrowserRouter as Router,
 
  Route
  
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import CreateExercise from "./components/CreateExercise"
import Createuser from "./components/Createuser"
import EditExercise from "./components/EditExercise"
import Exerciseliste from "./components/Exerciseliste"
function App() {
  return (
    <Router>
    <div className="App">
   <Navbar/>
      <Route path="/" exact component={Exerciseliste}/>
      <Route path="/edit/:id"  component={EditExercise}/>
      <Route path="/create"  component={CreateExercise}/>
      <Route path="/user"  component={Createuser}/>
    </div>
    </Router>
  );
}

export default App;
