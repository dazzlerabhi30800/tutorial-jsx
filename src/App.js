
import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react';
import  Alert  from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";



function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
        setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = "grey"
      showAlert("Dark mode has been enabled","success");
      document.title = 'Text Utils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
      document.title = 'Text Utils - Light Mode'
    }
  }


  return (
   <>
  <Router>

  <Navbar title = "TextUtilsbyDA" aboutText = "About-Us" mode  ={mode} toggleMode = {toggleMode} />
  <Alert alert = {alert} />
  {/* <Navbar  /> */}
  <div className="container my-3">
  <Switch>
          <Route exact path="/about">
            <About />
          </Route>
         
          <Route exact path="/">
            
              <TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" mode = {mode} />
          </Route>
        </Switch>

  
  </div>
  </Router>
  
  



   </>
  );
}

export default App;