import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AIcon from '../../Images/AIcon.png';

/*const useStyles = makeStyles((theme) => ({
    tabs: {
        textAlign: 'left !important'
    }

}));
*/
const Navcomponent = (props) => {
    //const classes = useStyles();
    const [value,setValue] = useState(0);
    const mobile = window.screen.width < 500 ? true : false;

    const handleChange = (e,value) => {
        setValue(value);
        props.tabchange(e,value);
    }
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
                    <img src={AIcon} width="60px" height="60px" />
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
                    <Tab label="Home" value={0} />
                    <Tab label="Education Details" value={1}  />
                    <Tab label="Skills" value={2}  />
                    <Tab label="Personal Projects" value={3}  />
                    <Tab label="Experience" value={4} />
                    <Tab label="Contact" value={5} />
                </Tabs>
        </div>
    )  
}
export default Navcomponent;