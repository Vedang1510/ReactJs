import NavBar from './compoents/navigation';
import Alert from './compoents/alert';
import React, {useState} from 'react';

function App() {
  const [mode, modeState] = useState('light');
  const [alert, alertState] = useState(null);
  const toggleMode = () =>{
    if(mode === 'light'){
      modeState('dark');
      document.body.style.backgroundColor = 'black';
      setAlert('Now you are in Dark Mode', 'success');
    }
    else    {
      modeState('light');
      document.body.style.backgroundColor = 'white';
      setAlert('You Are in light mode', 'warning');
    }  
  }
  const setAlert = (message, type)=>{
    alertState({
      msg : message,
      type : type
    })
  }
  return (
    <nav>
      <NavBar title="Vedang" pricing="My prices" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
    </nav>
  );
}

export default App;