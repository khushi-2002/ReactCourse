import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      ShowAlert("Dark mode has been Enabled",'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      ShowAlert("Light mode has been Enabled",'success')
    }
  }

  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      {/* <Navbar title='KextUtils'  about = 'About'/> */}
      <Navbar title='KextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading='Enter the text to analyze below' mode={mode} ShowAlert={ShowAlert}/>
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
