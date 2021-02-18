import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles((theme) => ({
    Head: {
        fontSize: '28px',
        fontWeight: '600',
    },
    decs : {
        marginBottom: '4px',
        marginTop: '4px'
    },
    expcontent: {
        [theme.breakpoints.down("sm")]: {
            fontSize: '13px',
        },
    }
}));


const Experiencecomponent = () => {
    const classes = useStyles();
    return(
        <div className={classes.expcontent}> 
            <Typography className={classes.Head}>Experience</Typography>
            <hr style={{opacity: '0.7',width: '100%'}} />
            <Grid container spacing={3}>
                <Grid item xs={12} style={{textAlign: 'left'}}>
                    <Typography style={{fontSize: '22px', fontWeight: '600'}}>
                        <font style={{color: '#ffb400'}}>FindMind Analytics Pvt. Ltd.</font> - Web Developer Intern
                    </Typography>
                    <Typography style={{fontWeight :'600', color: '#BEBEBE'}}>
                        Oct 2020 - Jan 2021
                    </Typography>
                    <ul style={{textAlign: 'left', lineHeight: '4vh',fontWeight: '550', opacity: '0.9'}}>
                        <li className={classes.decs}> Developed user interface for a product called Legal Mind and managed webAPIs for remote interaction</li>
                        <li className={classes.decs}> Designed and Developed the product using React for user interface, CSS, Material UI for styling and REDUX for state management</li>
                        <li className={classes.decs}> Used AXIOS for fetching API Data in ReactJS along with REDUX promise as a middleware &amp; Integrate with various Databases for receiving the data in the form of JSON and AJAX</li>
                        <li className={classes.decs}> Used Media Queries for Responsive web designing to be compatible in all devices. </li>
                        <li className={classes.decs}> Used Git Version control for the source code management of the application</li>
                        <li className={classes.decs}> Environment: ReactJS, REDUX, JSON, Material UI, CSS, React Hooks</li>
                    </ul>
                </Grid>
            </Grid>

        </div>
    );
}

export default Experiencecomponent;