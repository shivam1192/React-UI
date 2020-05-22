import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Paper from '@material-ui/core/Paper';
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
        left:'-15%',
        [theme.breakpoints.down('md')]: {
            top:-150,
            left:'35%',
           },
           [theme.breakpoints.down('sm')]: {
            top:0,
            left:'20%',
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
        backgroundImage:"url('./Images/Blob2.png')",
        minHeight:400,
        position:'relative',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        marginTop:-107,
          [theme.breakpoints.down('md')]: {
           marginTop:160,
           marginLeft:20
         },
      },
      front:{
        position:'absolute',
        top:150,
        width:'45%',
        [theme.breakpoints.down('md')]: {
           top:10,
           width:'60%',   
         },
      },
      paper: {
        padding: theme.spacing(2),
        background: "#1f2151",
        marginTop:40,
        height:50,
        [theme.breakpoints.down('md')]: {
            marginTop:6,
          },
        marginLeft:10,
      },
      paper: {
        padding: theme.spacing(2),
        background: "#1f2151",
        marginTop:40,
        height:50,
        [theme.breakpoints.down('md')]: {
            marginTop:6,
          },
        marginLeft:10,
      },
      box:{
          display: 'flex',
          flexDirection:'row',
      }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
         <Grid container className={classes.grid}>
         <Grid item xs={12} lg={8} md={12} className={classes.image}>
          <div className={classes.back}>
          <Grid container className={classes.front} style={{marginLeft:'20%'}}>
          <Grid item xs={12} lg={6} md={6}>
          <Paper className={classes.paper}>
              <div className={classes.box}>
              <img src="./Images/Trophy.png"/>
              <h1 style={{color:'white', fontSize:15, marginLeft:60}}> 32,323<br/>Awards</h1>
              </div>
              </Paper>
              </Grid>
              <Grid item xs={12} lg={6} md={6}>
              <Paper className={classes.paper}>
              <div className={classes.box}>
              <img src="./Images/coin.png"/>
              <h1 style={{color:'white', fontSize:15, marginLeft:60}}> 32,323<br/>Awards</h1>
              </div></Paper>
              </Grid>
         <Grid item xs={12} lg={6} md={6}>
          <Paper className={classes.paper}><div className={classes.box}>
          <img src="./Images/gift.png"/>
              <h1 style={{color:'white', fontSize:15, marginLeft:60}}> 32,323<br/>Awards</h1>
              </div></Paper>
              </Grid>
              <Grid item xs={12} lg={6} md={6}>
              <Paper className={classes.paper}><div className={classes.box}>
          <img src="./Images/card.png"/>
              <h1 style={{color:'white', fontSize:15, marginLeft:60}}> 32,323<br/>Awards</h1>
              </div></Paper>
              </Grid>
              </Grid>

            </div>
        </Grid>
        <Grid item xs={12} lg={4} md={12} className={classes.text}>

        <div className={classes.textwrap}> 
        <Typography variant="h6" className={classes.text1}>Large<br/>Achievement </Typography><br/>
<Typography variant="caption" align="justify" className={classes.text2}>I should be capable of drawing a single stroke at the present moment<br/> and yet I feel that I never was a greater artist than now.</Typography><br/>
<Typography variant="caption" align="justify" className={classes.text2}>When, while the lovely valley teems with vapour around me, and the <br/>meridian sun strikes the upper surface of the impenetrable foliage of<br/> my trees, and but a few stray.</Typography><br/>

 <Typography variant="caption" style={{fontSize:11, color: ' #1D8CF8', display:'block'}}>Show All <ArrowForwardIosIcon style={{ fontSize: 8 }}/>  </Typography> <br/>         
          </div>
        </Grid>
        
      </Grid>
    </div>
  );
}
