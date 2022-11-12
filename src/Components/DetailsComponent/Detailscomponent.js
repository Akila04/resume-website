import React from 'react';
import Avatar from '@material-ui/core/Avatar';
//import ProfilePhoto from '../../Images/Profile.jpg';
import ProfilePhoto from '../../Images/Akila.jpg'
import Typography from '@material-ui/core/Typography';

function Detailscomponent(){
    return(
        <div style={{color: '#ffffff'}}>
            <Avatar alt="Remy Sharp" src={ProfilePhoto} style={{width: '25vh',height:'25vh',margin:'auto'}}/>
            <Typography 
                style={{
                    fontSize:'24px',
                    fontWeight: '600',
                    color: '#ffb400'
                }}
            >
                Akilandeswari Gnanasekaran
            </Typography>
            <Typography 
                style={{
                    fontFamily:'sans-serif',
                    fontSize:'20px', 
                    fontWeight: '600' 
                }}
            >
                Full Stack Developer
            </Typography>
            <Typography
                style={{
                    fontFamily:'sans-serif',
                    fontSize:'16px', 
                    //opacity:'0.8' ,
                    fontWeight: '500'
                }}
            >
            Sense of User Experience, Product Design and Development.
            Product Enthusiast and keen on working with Product/Service based entity.
            Looking to work with cutting-edge technologies, increasing my skill base.
            </Typography>
        </div>
    );
}

export default Detailscomponent;
