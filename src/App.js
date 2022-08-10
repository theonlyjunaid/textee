import React, { useState } from 'react'
import About from './componenets/About';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import Alert from './componenets/Alert'
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
        <Navbar title="Textee By Junaid" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert} setAlert={setAlert} />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}
export default App;
