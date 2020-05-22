import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import RemoveIcon from '@material-ui/icons/Remove';
import AcUnitIcon from '@material-ui/icons/AcUnit';

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
            top:100,
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
           left:'-15%'   
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
      },
      box1:{
          width:'30%',
          backgroundColor:'#FD5D93',
          height:80,
          borderRadius:10,
          textAlign:'center',
          top: -27,
          left: 154,
          position: 'absolute',
          [theme.breakpoints.down('md')]: {
            width:'50%'
           },
      },
      box2:{
        backgroundColor:'#1D8CF8',
        borderRadius:10,
        textAlign:'center',
        position: 'absolute',
        top: 151,
    left: -51,
    width: '43%',
    height: 82,
          [theme.breakpoints.down('md')]: {
            width:'60%',
            left:-30
           },
    },
    box3:{
        width:'30%',
        backgroundColor:'#344675',
        height:80,
        borderRadius:10,
        textAlign:'center',
        top: 221,
        left: 223,
        position: 'absolute',
        [theme.breakpoints.down('md')]: {
            width:'60%'
           },
    }
}));

export default function Feature() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
         <Grid container className={classes.grid}>
         <Grid item xs={12} lg={8} md={6} className={classes.image}>
          <div className={classes.back}>
          <Grid container className={classes.front} style={{marginLeft:'20%'}}>
                    <img src="./Images/features.png" height="200" style={{left:0,top:0}}/>
                    <div className={classes.box1}><Typography variant="h6" style={{color:'white'}}>100%<br/>Safe</Typography></div>
                    <div className={classes.box2}><Typography variant="h5" style={{color:'white'}}>534K<br/>Satisfied</Typography></div>
                    <div className={classes.box3}><Typography variant="h6" style={{color:'white'}}>10425<br/>Buisness</Typography></div>

              </Grid>

            </div>
        </Grid>
        <Grid item xs={12} lg={4} md={6} className={classes.text}>

        <div className={classes.textwrap}> 
        <RemoveIcon style={{color:"#00F2C3"}}/>
        <Typography variant="h6" className={classes.text1}>Awesome features</Typography><br/>
<Typography variant="caption" align="justify" className={classes.text2}>The design system comes with three pre-built pages to help <br/>you get started faster. You can change the text and <br/>images and you're good to go.</Typography><br/>
<Typography variant="caption"><AcUnitIcon fontSize="small" style={{color:"#00F2C3"}}/>CAREFULLY CRAFTED COMPONENTS </Typography><br/>
<Typography variant="caption"><AcUnitIcon fontSize="small" style={{color:"#00F2C3"}}/>AMAZING PAGE EXAMPLES </Typography><br/>
<Typography variant="caption"><AcUnitIcon fontSize="small" style={{color:"#00F2C3"}}/>SUPER FRIENDLY SUPPORT TEAM</Typography> <br/>
          </div>
        </Grid>
        
      </Grid>
    </div>
  );
}
