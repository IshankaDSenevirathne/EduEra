import React from 'react'
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

import Info from "@material-ui/icons/Info";

import Chemistry from "../../../img/chemistry.png";
import Physics from "../../../img/physics.png";
import Biology from "../../../img/biology.png";
import iT from "../../../img/IT.png";

import Art from "../../../img/Art.png";
import Music from "../../../img/Music.png";
import History from "../../../img/History.png";
import Drama from "../../../img/Drama.png";

import Marketing from "../../../img/Marketing.png";
import Economics from "../../../img/Economics.png";
import BusinessStudies from "../../../img/BusinessStudies.png";
import Statistics from "../../../img/Statistics.png";
import Accounting from "../../../img/Accounting.png";

import Sci4Tech from "../../../img/Sci4Tech.png";
import EngTech from "../../../img/EngTech.png";


const useStyles=makeStyles((theme)=>({
    button: {
        color: "#EDEDED",
        borderTopLeftRadius:"0px",
        borderBottomLeftRadius:"0px",
        borderTopRightRadius:"0px",
        borderBottomRightRadius:"0px",
        transition:"0.5s ease-in-out",
        width:"100%",
        minHeight:"200px",
        "&:hover": {
          background:"#3f51b5",
          color: "#ffffff",
        },
    },
    paper: {
    background: "#363f44",
    borderRadius:"0px",
    textAlign:"center",
    },
}))

const science = [
    {
      title: "Physics",
      link: "physics",
      image:Physics
    },
    {
      title: "Chemistry",
      link: "chemistry",
      image:Chemistry

    },
    {
      title: "Biology",
      link: "biology",
      image:Biology

    },
    {
      title: "IT",
      link: "it",
      image:iT
    },
  ];
  const art = [
    {
      title: "Art",
      link: "art",
      image:Art
    },
    {
      title: "Drama",
      link: "drama",
      image:Drama
    },
    {
      title: "Music",
      link: "music",
      image:Music
    },
    {
      title: "History",
      link: "history",
      image:History
    },
  ];
  
  const commerce = [
    {
      title: "Marketing",
      link: "marketing",
      image:Marketing

    },
    {
      title: "Economics",
      link: "economics",
      image:Economics

    },
    {
      title: "Accounting",
      link: "accounting",
      image:Accounting

    },
    {
      title: "Business Studies",
      link: "buisness",
      image:BusinessStudies

    },
    {
      title: "Statistics",
      link: "statistics",
      image:Statistics

    },
  ];
const other = [
    {
        title: "Science for Technology",
        link: "sci4tech",
        image:Sci4Tech

    },
    {
        title: "Engineering Technology",
        link: "engtech",
        image:EngTech

    },
]
export default function Categories() {
    const classes=useStyles();
    return (
        <div>
            <Container>
                <div style={{paddingBottom:"70px",textAlign:"left"}}>
                    <Typography variant="h4" justify="center">
                        CATEGORIES
                    </Typography>
                </div>
                <div style={{padding:"10px 10px 10px 10px",border:'1px solid #1fa2ff',borderRadius:"4px",margin:"0px, 10px 20px 10px",width:"fit-content",background:"#363f44"}}>
                    <Typography variant="body1" align="left">
                        <span style={{alignItems:"center",justifyItems:"center",display:"flex"}}>
                            <Info style={{color:"#1fa2ff"}} fontSize="large"/>
                            &nbsp;&nbsp;&nbsp;
                            Select the subject of your preferance.
                        </span>
                    </Typography>
                </div>
                
                <div id ='science'  style={{marginTop:"30px",paddingBottom:"50px"}}>
                    <div style={{paddingBottom:"30px"}}>
                        <Typography variant="h5" align="left">
                            SCIENCE
                        </Typography>
                    </div>
                    <Grid alignItems="center" justify="left" spacing={1} container>
                        {science.map((subject)=>(
                            <Grid item xs={6} sm={3} md={2}>
                                <div>
                                    <Paper elevation={2} className={classes.paper}>
                                        <Link to={`/quizes?subject=${subject.link}`} style={{textDecoration:"none"}}>
                                            <Button className={classes.button}>
                                                <div>
                                                    <img src={subject.image}></img>
                                                    <Typography align="center" variant="subtitle1">
                                                        {subject.title}
                                                    </Typography>
                                                </div>
                                            </Button>
                                        </Link>
                                    </Paper> 
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>    
                <div id ='art'  style={{paddingBottom:"50px"}}>
                    <div style={{paddingBottom:"30px"}}>
                        <Typography variant="h5" align="left">
                            ART
                        </Typography>
                    </div>
                    <Grid alignItems="center" justify="left" spacing={1} container>
                        {art.map((subject)=>(
                            <Grid item xs={6} sm={3} md={2}>
                                <div>
                                    <Paper elevation={2} className={classes.paper}>
                                        <Link to={`/quizes?subject=${subject.link}`} style={{textDecoration:"none"}}>
                                            <Button className={classes.button}>
                                                <div>
                                                    <img src={subject.image}></img>
                                                    <Typography align="center" variant="subtitle1">
                                                        {subject.title}
                                                    </Typography>
                                                </div>
                                            </Button>
                                        </Link>
                                    </Paper> 
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>    
                <div id ='commerce'  style={{paddingBottom:"50px"}}>
                    <div style={{paddingBottom:"30px"}}>
                        <Typography variant="h5" align="left">
                            COMMERCE
                        </Typography>
                    </div>
                    <Grid alignItems="center" justify="left" spacing={1} container>
                        {commerce.map((subject)=>(
                            <Grid item xs={6} sm={3} md={2}>
                                <div>
                                    <Paper elevation={2} className={classes.paper}>
                                        <Link to={`/quizes?subject=${subject.link}`} style={{textDecoration:"none"}}>
                                            <Button className={classes.button}>
                                                <div>
                                                    <img src={subject.image}></img>
                                                    <Typography align="center" variant="subtitle1">
                                                        {subject.title}
                                                    </Typography>
                                                </div>
                                            </Button>
                                        </Link>
                                    </Paper> 
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>    
                <div id ='other'  style={{paddingBottom:"50px"}}>
                    <div style={{paddingBottom:"30px"}}>
                        <Typography variant="h5" align="left">
                            OTHER
                        </Typography>
                    </div>
                    <Grid alignItems="center" justify="left" spacing={1} container>
                        {other.map((subject)=>(
                            <Grid item xs={6} sm={3} md={2}>
                                <div>
                                    <Paper elevation={2} className={classes.paper}>
                                        <Link to={`/quizes?subject=${subject.link}`} style={{textDecoration:"none"}}>
                                            <Button className={classes.button}>
                                                <div>
                                                    <img src={subject.image}></img>
                                                    <Typography align="center" variant="subtitle1">
                                                        {subject.title}
                                                    </Typography>
                                                </div>
                                            </Button>
                                        </Link>
                                    </Paper> 
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>    
            </Container>
        </div>
    )
}
