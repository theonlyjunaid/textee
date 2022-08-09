import './App.css';
import React, { useState } from 'react'
import About from './componenets/About';
import Components from './componenets/Components';
// import Foo from './componenets/Comp';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import Alert from './componenets/Alert'
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode("light")
      document.title = "Text | Light Mode"
      document.body.style.background = "white"
      showAlert("Light mode Enabled", "success")
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }
    //  else if (mode === 'green') {
    //   setMode("success")
    //   document.body.style.background = "white"
    //   showAlert("Light mode Enabled", "success")
    //   setTimeout(() => {
    //     setAlert(null)
    //   }, 1500);
    // }
    else {
      setMode("dark")
      document.title = "Text | Dark Mode"
      document.body.style.background = "#042743"
      showAlert("Dark mode Enabled", "success")
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }
  }
  return (
    <Router>
      <>
        <Navbar title="Junaid" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert} setAlert={setAlert} />} />
            <Route exact path="/components" element={<Components />} />
          </Routes>
        </div>
        {/* <About /> */}
        {/* <Components /> */}
      </>
    </Router>
  );
}
export default App;
