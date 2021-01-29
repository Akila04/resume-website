import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import EventIcon from '@material-ui/icons/Event';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles((theme) => ({
    EducationHead: {
        fontSize: '28px',
        fontWeight: '600',
    },
    degree: {
        fontSize: '24px',
        fontWeight: '600',
        color: '#ffb400'
        //textAlign: 'left',
    },
    university: {
        fontWeight: '600'
    }

}));


function Educationcomponent() {
    const classes = useStyles();
    return(
        <div>
            <Typography className={classes.EducationHead}>Education Details</Typography>
            <hr style={{opacity: '0.7',width: '80%'}}/>
            <div style={{marginBottom: '40px',marginTop: '20px'}}>
                <Typography className={classes.degree}>B.E Computer Science Engineering</Typography>
                <Typography className={classes.university}>
                    <span style={{verticalAlign: 'middle'}}><SchoolIcon />&nbsp;</span>
                    Anna University
                </Typography>
                <Typography style={{textAlign: 'center',opacity: '0.8'}}>
                    <span style={{verticalAlign: 'middle'}}><EventIcon />&nbsp;&nbsp;</span>
                    <span style={{verticalAlign: 'middle'}}>08/2018 - 05/2022 &nbsp; </span>
                    <span style={{verticalAlign: 'middle'}}><LocationOnIcon />&nbsp;</span>
                    <span style={{verticalAlign: 'middle'}}>chennai, TamilNadu</span>
                </Typography>
                <Typography style={{fontWeight: '600'}}>GPA - 8.80/10.00</Typography>
            </div>
            <div>
                <Typography className={classes.degree}>Higher Secondary Education</Typography>
                <Typography className={classes.university}>
                    <span style={{verticalAlign: 'middle'}}><SchoolIcon />&nbsp;</span>
                    Savthri Vidya sala Hr.sec.school
                </Typography>
                <Typography style={{textAlign: 'center',opacity: '0.8'}}>
                    <span style={{verticalAlign: 'middle'}}><EventIcon />&nbsp;&nbsp;</span>
                    <span style={{verticalAlign: 'middle'}}>06/2017 - 04/2018 &nbsp;&nbsp;</span>
                    <span style={{verticalAlign: 'middle'}}><LocationOnIcon />&nbsp;</span> 
                    <span style={{verticalAlign: 'middle'}}>Trichy, TamilNadu</span>
                </Typography>
                <Typography style={{fontWeight: '600'}}>Percetage - 93.41%</Typography>
            </div>

        </div>
    );
}

export default Educationcomponent;