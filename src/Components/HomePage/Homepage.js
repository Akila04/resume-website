import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Detailscomponent from '../DetailsComponent/Detailscomponent';
import Educationcomponent from '../EducationComponent/Educationcomponent';
import Skillscomponent from '../SkillsComponent/Skillscomponent';
import Projectcomponent from '../ProjectComponent/Projectcomponent';
import Experiencecomponent from '../ExperienceComponent/Experiencecomponent';
import Contactcomponent from '../ContactComponent/Contactcomponent';

const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: 'center',
    },
}));

function Homepage(props){
    const classes = useStyles();
    return(
        <div>
            {props.value === 0 && <Detailscomponent />}
            {props.value === 1 && <Educationcomponent />}
            {props.value === 2 && <Skillscomponent />} 
            {props.value === 3 && <Projectcomponent />}
            {props.value === 4 && <Experiencecomponent />}
            {props.value === 5 && <Contactcomponent /> }
        </div>
            
    );
}

export default Homepage;