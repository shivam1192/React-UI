import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:'5%',
  },
  text:{
      color:'white',
      position:'relative',
      fontFamily: 'Poppins',
      width:'100%'
      },
      textwrap:{
        position:'absolute',
        top:'30%',
        right:'-40%',
        [theme.breakpoints.down('md')]: {
            right:'30%',
            top:'60px',
           },
          },
      text1:{
        fontSize:40,
        [theme.breakpoints.up('lg')]: {
            fontSize:30
         },
      },
      text2:{
        fontSize:10,
        display:'block',
      },
      sn:{
        display:'inline-block',
        paddingLeft:10
      },
      back:{
        backgroundImage:"url('./Images/Blob1.png')",
        minHeight:600,
        position:'relative',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
      },
      front:{
        position:'absolute',
        top:'19%',
        left:'39%',
        [theme.breakpoints.down('md')]: {
           top:'55%',
         },
      }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
         <Grid container className={classes.grid}>
        <Grid item xs={12} lg={4} md={12} className={classes.text}>
        <div className={classes.textwrap}>          
          <Typography variant="h6" className={classes.text1}>We keep your coin<br/>Secured </Typography><br/>
         <Typography variant="caption" align="justify" className={classes.text2}>A wonderful serenity has taken possession of my entire soul, like these sweet<br/> mornings of spring which I enjoy with my whole heart. I am alone, and feel...</Typography><br/>
          <Typography variant="caption" style={{fontSize:11, color: '#00F2C3', display:'block'}}>From 9.99%/Mo <ArrowForwardIosIcon  style={{ fontSize: 8 }}/> </Typography> <br/>
          <div className={classes.sn}>
            <img src="./Images/whitet.png"/>
          </div>
          <div className={classes.sn}>
            <img src="./Images/whited.png"/>
          </div>
          
          <div className={classes.sn}>
            <img src="./Images/whitef.png"/>
          </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={8} md={12} className={classes.image}>
          <div className={classes.back}>
             <img src="./Images/Ethereum.png" height='380' className={classes.front}/>
            </div>
        </Grid>
      </Grid>
    </div>
  );
}