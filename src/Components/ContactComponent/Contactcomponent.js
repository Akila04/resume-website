import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    Head: {
        fontSize: '28px',
        fontWeight: '600',
    },
    decs : {
        marginBottom: '4px',
        marginTop: '4px'
    }
}));


const Contactcomponent = () => {
    const classes = useStyles();
    return(
        <div>
            <Typography className={classes.Head}>Contact Info</Typography>
            <hr style={{opacity: '0.7',width: '100%'}} />
            <div style={{textAlign: 'left'}}>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <Typography style={{fontWeight: '600', color: '#ffb400'}}>Phone</Typography>
                    </Grid>
                    <Grid item xs={1} style={{textAlign: 'right'}}>
                        <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                                <CallIcon />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography style={{fontWeight: '600'}}>&nbsp;(+91) 63815-50811</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <Typography style={{fontWeight: '600', color: '#ffb400'}}>Email</Typography>
                    </Grid>
                    <Grid item xs={1} style={{textAlign: 'right'}}>
                        <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                                <EmailIcon />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography style={{fontWeight: '600'}}>&nbsp;akilag0404@gmail.com</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <Typography style={{fontWeight: '600', color: '#ffb400'}}>LinkedIn</Typography>
                    </Grid>
                    <Grid item xs={1} style={{textAlign: 'right'}}>
                        <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                                <LinkedInIcon />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography style={{fontWeight: '600'}}>
                                    <a
                                        href="https://www.linkedin.com/in/akila-g-5764991b1/"
                                        target="_blank"
                                        style={{color: '#ffffff'}}
                                    >
                                        &nbsp;www.linkedin.com/in/akila-g-5764991b1/ 
                                    </a>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={2} style={{paddingRight: '0px !important'}}>
                        <Typography style={{fontWeight: '600', color: '#ffb400'}}>Github</Typography>
                    </Grid>
                    <Grid item xs={1} style={{textAlign: 'right'}}>
                        <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                                <GitHubIcon />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography style={{fontWeight: '600'}}>
                                    <a 
                                        href="https://github.com/Akila04" 
                                        target="_blank" 
                                        style={{color: '#ffffff'}}
                                    >
                                    &nbsp;github.com/Akila04
                                    </a>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Contactcomponent;
