import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AIcon from '../../Images/AIcon.png';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navcomponent = (props) => {

    const path = window.location.pathname === '/' ? '/home' : window.location.pathname; 
    const [value,setValue] = useState(path);
    const mobile = window.screen.width < 500 ? true : false;
    let history = useHistory();

    const handleChange = (e,value) => {
        setValue(value);
        history.push(value);
        //props.tabchange(e,0);
        
    }
    console.log('window.location.href',window.location.pathname)
    return(
        <div
            style={{
                backgroundColor: '#000d1a',
                height: '100vh',
                width: '30vh',
                color:'#ffffff',
                position:'absolute'
            }}>
                <Typography 
                    style={{
                        textAlign:'left',
                        margin:'5px',
                        fontFamily: 'Times New Roman',
                        margin: "4vh",
                        textAlign:'center'
                    }}>
                    <Link to='/home' onClick={() => {setValue('/home');}} >
                    <img src={AIcon} width="60px" height="60px"  />
                    </Link>
                    <Typography style={{fontWeight: '600',fontSize:'17px'}}>&nbsp;Akilandeswari</Typography>
                </Typography>
                <hr style={{opacity:'0.1'}} />
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    //className={classes.tabs}
                    style={{marginTop: '4vh'}}
                >
                    <Tab label="Home" 
                        value='/home'
                    />
                    <Tab 
                        label="Education Details" 
                        value= '/education'
                    />
                    <Tab 
                        label="Skills" 
                        value='/skills'
                    />
                    <Tab 
                        label="Experience" 
                        value = '/experience' 
                    />
                    <Tab 
                        label="Personal Projects" 
                        value='/projects'
                    />
                    <Tab 
                        label="Contact" 
                        value='/contact'
                    />
                </Tabs>
                
        </div>
    )  
}
export default Navcomponent;