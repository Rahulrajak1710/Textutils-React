// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  //  Link
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState( 'light');
  

  const togglemode=()=>{
    if(mode==='light'){
       setmode('dark')
       document.body.style.backgroundColor='#0c3b64';
      
    }else{
      setmode("light");
      document.body.style.backgroundColor='white';
      
    }
  }
  return (
    <>
    <Router>
    {/* <Navbar title="Textutils" about="About Us"/> */}
    <Navbar title="Textutils" mode={mode} about="About Us" togglemode={togglemode}/>
  
    <div className="container my-3">
    
      
        <Routes>
         
          <Route exact path="/" element={ <TextForm heading="Enter the text to analyze below" mode={mode} />}/>
          <Route exact path="/about" element={<About/>}/>
          
        </Routes>
      
    
      
    
    </div>
    </Router>
    </>
    
  );
}

export default App;
