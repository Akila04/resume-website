import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const StyledRating = withStyles({
    iconFilled: {
      color: "#ffb400",
    },
    iconEmpty: {
      color: "#dddddd"
    }
  })(Rating);
  

const useStyles = makeStyles((theme) => ({
    Head: {
        fontSize: '28px',
        fontWeight: '600',
    },
    skillscontent: {
        [theme.breakpoints.down("sm")]: {
            paddingTop: '0px !important',
            paddingBottom: '0px !important',
        },
    },
    marginSetup: {
        margin: '2vh',
        [theme.breakpoints.down("sm")]: {
            margin: '1vh'
        }
    },
    expcontent: {
        [theme.breakpoints.down("sm")]: {
            fontSize: '13px',
            height: '80vh',
            overflowY: 'scroll',
        },
    }
}));

const Educationcomponent = () => {
    const classes = useStyles();
    return(
        <div className={classes.expcontent}>
            <Typography className={classes.Head}>Skills</Typography>
            <hr style={{opacity: '0.7',width: '100%'}} />
            <Box component="fieldset" mb={3} borderColor="transparent" style={{paddingLeft: '0px'}}>
                <div>
                <Grid container spacing={3}>
                <Grid item xs={12} sm={6} className={classes.skillscontent}>
                    <Grid container spacing={1} className={classes.marginSetup}>
                        <Grid item xs={6}>
                            <Typography style={{textAlign: 'left', fontWeight: '600'}}>React JS</Typography>
                        </Grid>
                        <Grid item xs={6} style={{textAlign: 'left'}}>
                            <StyledRating
                                name="hover-feedback"
                                value={4.5}
                                precision={0.5}
                                readOnly
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} className={classes.marginSetup}>
                        <Grid item xs={6} >
                            <Typography style={{textAlign: 'left', fontWeight: '600'}}>Redux</Typography>
                        </Grid>
                        <Grid item xs={6} style={{textAlign: 'left'}}>
                            <StyledRating
                                name="hover-feedback"
                                value={4}
                                precision={0.5}
                                readOnly
                            // size= "large"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} className={classes.marginSetup}>
                        <Grid item xs={6} >
                            <Typography style={{textAlign: 'left', fontWeight: '600'}}>React Hooks</Typography>
                        </Grid>
                        <Grid item xs={6} style={{textAlign: 'left'}}>
                            <StyledRating
                                name="hover-feedback"
                                value={4}
                                precision={0.5}
                                readOnly
                            // size= "large"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} className={classes.marginSetup}>
                        <Grid item xs={6} >
                            <Typography style={{textAlign: 'left', fontWeight: '600'}}>Spring Boot</Typography>
                        </Grid>
                        <Grid item xs={6} style={{textAlign: 'left'}}>
                            <StyledRating
                                name="hover-feedback"
                                value={4}
                                precision={0.5}
                                readOnly
                            // size= "large"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} className={classes.marginSetup}>
                        <Grid item xs={6} >
                            <Typography style={{textAlign: 'left', fontWeight: '600'}}>Material UI &amp; BootStrap</Typography>
                        </Grid>
                        <Grid item xs={6} style={{textAlign: 'left'}}>
                            <StyledRating
                                name="hover-feedback"
                                value={4.5}
                                precision={0.5}
                                readOnly
                            // size= "large"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.skillscontent}>
                    <Grid container spacing={1} className={classes.marginSetup}>
                        <Grid item xs={6} >
                            <Typography style={{textAlign: 'left', fontWeight: '600'}}>Java Script</Typography>
                        </Grid>
                        <Grid item xs={6} style={{textAlign: 'left'}}>
                            <StyledRating
                                name="hover-feedback"
                                value={3.5}
                                precision={0.5}
                                readOnly
                            // size= "large"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} className={classes.marginSetup}>
                        <Grid item xs={6} >
                            <Typography style={{textAlign: 'left', fontWeight: '600'}}>CSS</Typography>
                        </Grid>
                        <Grid item xs={6} style={{textAlign: 'left'}}>
                            <StyledRating
                                name="hover-feedback"
                                value={4.5}
                                precision={0.5}
                                readOnly
                            // size= "large"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} className={classes.marginSetup}>
                        <Grid item xs={6} >
                            <Typography style={{textAlign: 'left', fontWeight: '600'}}>C Programming</Typography>
                        </Grid>
                        <Grid item xs={6} style={{textAlign: 'left'}}>
                            <StyledRating
                                name="hover-feedback"
                                value={4}
                                precision={0.5}
                                readOnly
                            // size= "large"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} className={classes.marginSetup}>
                        <Grid item xs={6} >
                            <Typography style={{textAlign: 'left', fontWeight: '600'}}>JAVA</Typography>
                        </Grid>
                        <Grid item xs={6} style={{textAlign: 'left'}}>
                            <StyledRating
                                name="hover-feedback"
                                value={4}
                                precision={0.5}
                                readOnly
                            // size= "large"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} className={classes.marginSetup}>
                        <Grid item xs={6} >
                            <Typography style={{textAlign: 'left', fontWeight: '600'}}>Data Structure &amp; Algorithms</Typography>
                        </Grid>
                        <Grid item xs={6} style={{textAlign: 'left'}}>
                            <StyledRating
                                name="hover-feedback"
                                value={4.5}
                                precision={0.5}
                                readOnly
                            // size= "large"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
                </div>
            </Box>
        </div>
    );
}

export default Educationcomponent;
