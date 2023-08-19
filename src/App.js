import React, {useState} from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Alert from './components/Alert';
import {BrowserRouter,Route,Routes} from 'react-router-dom';


export default function App() {
  const [alert, setAlert] = useState(null);
  const showAlert= (message, type)=>{
    setAlert({
      msg:message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode ==='dark'){
      setMode('light');
      document.body.style.backgroundColor='#e2e3e5'
      showAlert('light Mode has been enabled','success ')
      document.title= 'TextUtils-light';
      // setInterval(()=>{
      //   document.title="TextUtils is amazing app"
      // },1500)
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#052c65'
      showAlert('Dark Mode has been enabled','success ')
      document.title= 'TextUtils-Dark';
    }
  }
  return (
    <>
        <Navbar title="TextUtils" home="Home" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        {/* <Navbar/> */}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home heading="Enter Text To Analyze" showAlert={showAlert} mode={mode} toggleMode={toggleMode}/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/error" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
