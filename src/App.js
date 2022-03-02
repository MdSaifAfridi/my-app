import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
 import About from './components/About';


import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link
 } from "react-router-dom";



function App() {

  const [mode,setMode]=useState('light');  
  const[alert,setAlert]=useState(null);

  //Show_Alert function
  const showAlert=(message,type) =>{

   setAlert({
     msg:message,
     type:type
   })

   setTimeout(() =>
   {
       setAlert(null);
   },3000)

  }



  const removeBodyClassses=()=>
  {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  
  }
  // Toggle function
  const toggleMode=(cls) =>{
    removeBodyClassses();
    document.body.classList.add('bg-'+cls)
  if(mode==='light' ){
     setMode('dark');
    document.body.style.backgroundColor='#042741';
    showAlert('Dark mode is enabled','success');
    document.title='TextUtils-DarkMode';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert('Light mode is enabled','success');
    document.title='TextUtils-LightMode';
  }
}


//toggle1 function

  return (
    <>

    <Router>
      <NavBar title="TextUtils2" aboutus="About Text"  mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">

      <Routes>
        <Route exact path="/about" element={<About   mode={mode} />}/>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />

        {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}

      </Routes>
       </div>
    </Router>
      
    </>
  );
}

export default App;
