import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

import "./Logo.css";

//Images
import Wave from "../../../img/wavebottom.svg";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "whitesmoke",
    "&:hover": {
      backgroundColor: lightBlue[400],
      color: "white",
    },
  },
  button2: {
    color: "#2a3136",
    borderColor:"#2a3136",
    "&:hover": {
      borderColor:"#1fa2ff",
      color: "#1fa2ff",
    },
  },
}));

export default function Banner() {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#2a3136",
        textTransform: "uppercase",
        paddingBottom:"60px",
        width:"100%",
        minHeight:"100%",
      }}
    >

      <div style={{backgroundImage:`url(${Wave})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",paddingTop:"60px"}}>
        <Container>
          <Grid container spacing={2} alignItems="center">
            
            <Grid item sm={12} md={6} container justify="center">
              <div>
                <Typography gutterBottom align="center">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="278.069px" height="370.692px" viewBox="0 0 175.75 266.93">
                        <title>Paperly (3)</title>
                        <path style={{fill:"#373f44"}} className="left a animate fadeLeft" d="M45.27,5.06c-1.65-1.9-3-1.4-3,1.11v258.5c0,2.52,1.33,3,2.95,1.08L78,226.91a14.57,14.57,0,0,0,3-8.06V50.75a14.23,14.23,0,0,0-3-8Z"/>
                        <path style={{fill:"#373f44"}} className="top a animate fadeDown" d="M170.43,65.06a6.7,6.7,0,0,0-3.54-6.49L44.72.51C42.44-.56,41.93.11,43.58,2l53.3,61.68A26.16,26.16,0,0,0,104,69.11l57.87,27.5a39.51,39.51,0,0,0,4.19,1.84c0-.07.33-2.16.65-4.65Z"/>
                        <path style={{fill:"#31c5f4"}} className="right b animate fadeRight" d="M175.74,58.14c0-2.51-1.83-3.62-4.06-2.46l-170,88.65c-2.23,1.17-2.32,3.23-.2,4.58l30.41,19.4a8.74,8.74,0,0,0,7.9.35L171.7,99.77a8.31,8.31,0,0,0,4.05-6.69Z"/>
                    </svg>
                  </div>
                </Typography>
              </div>
            </Grid>
            <Grid item sm={12} md={6} container justify="center">
            
              <Grid item>
                <div data-aos="fade-up">
                  <Typography gutterBottom variant="h6" align="center">
                    <b>The easiest way to answer A/L Past papers.</b>
                  </Typography>
                  <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                    <Typography gutterBottom variant="subtitle1" align="center">
                      Everything you need, 100% free.
                    </Typography>
                  </div>
                  <Typography gutterBottom variant="subtitle1" align="center">
                    <Link
                      to="/subjectmenu"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        GET STARTED
                      </Button>
                    </Link>
                    &nbsp;
                    &nbsp;
                    <Link
                      to="/subjectmenu"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Button
                        variant="outlined"
                        color="default"
                        className={classes.button2}
                      >
                        LEARN MORE
                      </Button>
                    </Link>
                  </Typography>
                </div>
              </Grid>
            </Grid>
            
          </Grid>
        </Container>
      </div>
    </div>
  );
}
