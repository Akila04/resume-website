import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../ProjectComponent/projectstyles.css';

const useStyles = makeStyles((theme) => ({
    Head: {
        fontSize: '28px',
        fontWeight: '600',
    },
    projectHead: {
        fontSize: '20px',
        fontWeight: '600',
        color: '#ffb400',
        paddingLeft: '0px !important',
        paddingRight: '0px !important',
        [theme.breakpoints.down("sm")]: {
            fontSize: '17px',
            textAlign: 'left' 
        },
    },
    projectContent: {
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px',
        }
    },
    paddingZero: {
        marginTop: '0px',
        marginBottom: '0px'
    }
}));


const Projectcomponent = () => {
    const classes = useStyles();
    return(
        <div className='rootComponent'>
            <Typography className={classes.Head}>Personal Projects</Typography>
            <hr style={{opacity: '0.7',width: '100%',marginBottom: '5vh'}} />
            <Grid container spacing={1}>
                <Grid item xs={12} sm={3} className={classes.projectHead}>
                    Resume :
                </Grid>
                <Grid item xs={12} sm={9} style={{textAlign: 'justify'}} className='projectcon'>
                    <Grid item xs={12} style={{fontWeight: '600',lineHeight: '3.5vh', marginBottom: '25px'}}>
                        Created a Resume Website where the user could find my qualifications, skills and so on...
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={3} sm={3} style={{fontWeight: '600'}}>
                            <p  className={classes.paddingZero}>Website </p>
                        </Grid>
                        <Grid item xs={9} sm={9}>
                           <p style={{wordBreak: 'break-all', textIndent: '-1.5vh', paddingLeft: '1.5vh'}}  className={classes.paddingZero}> :&nbsp;
                                <a 
                                    href="https://gallant-kalam-8a8287.netlify.app/" 
                                    target="_blank" 
                                    style={{color:'#FFA07A'}}
                                >
                                    https://gallant-kalam-8a8287.netlify.app
                                </a>
                            </p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={3} sm={3} style={{fontWeight: '600'}}>
                            <p >Source Code </p>
                        </Grid>
                        <Grid item xs={9} sm={9}>
                           <p style={{wordBreak: 'break-all', textIndent: '-1.5vh', paddingLeft: '1.5vh'}}> :&nbsp;
                                <a 
                                    href="https://github.com/Akila04/resume-website" 
                                    target="_blank" 
                                    style={{color:'#FFA07A'}}
                                >
                                    https://github.com/Akila04/resume-website
                                </a>
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3} className={classes.projectHead}>
                    WeatherApp :
                </Grid>
                <Grid item xs={12} sm={9} style={{textAlign: 'justify'}} className='projectcon'>
                    <Grid item xs={12} style={{fontWeight: '600',lineHeight: '3.5vh', marginBottom: '25px'}}>
                        Created a Web Application which provides the weather details of the given city.
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={3} sm={3} style={{fontWeight: '600'}}>
                            <p  className={classes.paddingZero}>Website</p>
                        </Grid>
                        <Grid item xs={9} sm={9}>
                           <p style={{wordBreak: 'break-all', textIndent: '-1.5vh', paddingLeft: '1.5vh'}} className={classes.paddingZero}> :&nbsp;
                                <a 
                                    href="https://master.d3prrluircykis.amplifyapp.com/" 
                                    target="_blank" 
                                    style={{color:'#FFA07A'}}
                                >
                                https://master.d3prrluircykis.amplifyapp.com
                                </a>
                            </p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={3} sm={3} style={{fontWeight: '600'}}>
                            <p >Source Code </p>
                        </Grid>
                        <Grid item xs={9} sm={9}>
                           <p style={{wordBreak: 'break-all', textIndent: '-1.5vh', paddingLeft: '1.5vh'}}> :&nbsp;
                                <a 
                                    href="https://master.dv9eo8ex2w3w0.amplifyapp.com" 
                                    target="_blank" 
                                    style={{color:'#FFA07A'}}
                                >
                                    https://github.com/Akila04/myweatherapp
                                </a>
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={3} className={classes.projectHead}>
                    Tic-Tac-Toe :
                </Grid>
                <Grid item xs={12} sm={9} style={{textAlign: 'justify'}} className='projectcon'>
                    <Grid item xs={12} style={{fontWeight: '600',lineHeight: '3.5vh', marginBottom: '25px'}}>
                        Created a Tic Tac Toe application where user can play Tic Tac Toe game in web app.
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={3} sm={3} style={{fontWeight: '600'}}>
                            <p  className={classes.paddingZero}>Website </p>
                        </Grid>
                        <Grid item xs={9} sm={9}>
                           <p style={{wordBreak: 'break-all', textIndent: '-1.5vh', paddingLeft: '1.5vh'}}  className={classes.paddingZero}> :&nbsp;
                                <a 
                                    href="https://master.dv9eo8ex2w3w0.amplifyapp.com" 
                                    target="_blank" 
                                    style={{color:'#FFA07A'}}
                                >
                                    https://master.d3prrluircykis.amplifyapp.com
                                </a>
                            </p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={3} sm={3} style={{fontWeight: '600'}}>
                            <p >Source Code </p>
                        </Grid>
                        <Grid item xs={9} sm={9}>
                           <p style={{wordBreak: 'break-all', textIndent: '-1.5vh', paddingLeft: '1.5vh'}}> :&nbsp;
                                <a 
                                    href="https://github.com/Akila04/tic-tac-toe" 
                                    target="_blank" 
                                    style={{color:'#FFA07A'}}
                                >
                                     https://github.com/Akila04/tic-tac-toe
                                </a>
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
        </div>
    );
}

export default Projectcomponent;
