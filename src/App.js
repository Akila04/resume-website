import './App.css';
import ParticleBackground from './Components/ParticleBackground';
import {BrowserRouter as Router} from 'react-router-dom'
import Homepage from './Components/HomePage/Homepage';
import Navcomponent from './Components/NavComponent/Navcomponent';
import DrawerMenu from './Components/Drawermenu/DrawerMenu'

function App() {

  const ismobile = window.screen.width < 600 ? true : false;

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
         {ismobile ? <DrawerMenu /> : <Navcomponent />} 
        </div>
        <div className='homepageComponent'>
          <Homepage />
        </div>
      </Router>
    </div>
  );
}

export default App;
