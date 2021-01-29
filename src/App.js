import './App.css';
import ParticleBackground from './Components/ParticleBackground';
import {BrowserRouter as Router} from 'react-router-dom'
import Homepage from './Components/HomePage/Homepage';
import Navcomponent from './Components/NavComponent/Navcomponent';
import { useState } from 'react';

function App() {
  const [value,setValue] = useState(0);

  const tabchange = (event,value) => {
    setValue(value);
    console.log(value);
  } 

  return (
    <div className="App">
      <Router>
        <div
          style={{
            position: "absolute",
            top: '0px',
            left: '0px',
            width: "100%",
            height: "100%"
          }}
        >
          <ParticleBackground />
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
           // width: "100%",
            //height: "100%"
          }}
        >
          <Navcomponent tabchange={tabchange}/>
        </div>
        <div
          style={{
            position: "absolute",
            top: '50%',
            left: '55%',
            width: "40%",
            transform: 'translate(-55%, -50%)',
           color:'#ffffff',
          }}
        >
          <Homepage value={value}/>
        {/**   <Detailscomponent />*/}
        </div>
      </Router>
    </div>
  );
}

export default App;
