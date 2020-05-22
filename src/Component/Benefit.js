
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import RemoveIcon from '@material-ui/icons/Remove';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:100
  },root1: {
    textAlign:'center',
     color:"white",
     fontSize:20, 
     marginTop:100,
     [theme.breakpoints.down('md')]: {
      marginTop:400
     },
  },
  paper: {
    height: 200,
    width: 200,
    background:'#161841',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <div>
    <Grid container>
      <Grid item xs={12} className={classes.root1}>
            Your Best Benefits
      </Grid>
    </Grid>
    <Grid container className={classes.root} spacing={2} >
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3} style={{textAlign:'center'}}>
            <Grid item>
              <Paper className={classes.paper}>
              <img src="./Images/Money-coins.png"/>
                <h4 style={{color:'white'}}> Hello world</h4>
                 <RemoveIcon style={{color:"#E14ECA", marginTop:-10}} />
               <h6 style={{color:'white', marginTop:0}}>Divide details about your work into parts. Write a few lines about each one. A paragraph describing a feature will.</h6>              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
              <img src="./Images/chart.png"/>
            <h4 style={{color:'white'}}> Hello world</h4>
             <RemoveIcon style={{color:"#FF8D72", marginTop:-10}}/>
            <h6 style={{color:'white', marginTop:0}}>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing feature will be a feature.</h6>
             </Paper>
            </Grid>
            <Grid item>
            <Paper className={classes.paper}>
            <img src="./Images/Single-02.png"/>
             <h4 style={{color:'white'}}> Hello world</h4>
           <RemoveIcon style={{color:"#00F2C3", marginTop:-10}}/>
             <h6 style={{color:'white', marginTop:0}}>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing be enough.</h6>             </Paper>
            </Grid>
        </Grid>
      </Grid>
     
    </Grid>
    </div>
  );
}