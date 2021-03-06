import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Hidden from "@material-ui/core/Hidden";

import FaceBook from "../../img/icons/facebook-2.svg";
import GitHub from "../../img/icons/github-2.svg";
import Twitter from "../../img/icons/twitter-2.svg";
import Reddit from "../../img/icons/reddit-2.svg";
import Instagram from "../../img/icons/instagram-2.svg";

const useStyles=makeStyles(()=>({

    buttons:{
        "& .MuiFab-sizeMedium":{
            boxShadow:"none",
            "&:hover":{
                backgroundColor:"#1fa2ff",
            }
        }
    },
    buttonTop:{
        borderTopRightRadius:"10px",
        backgroundColor:"#3f51b5",
        borderTopLeftRadius:"0px",
        borderBottomRightRadius:"0px",
        borderBottomLeftRadius:"0px",
        
    },
    buttonMiddle:{
        borderTopRightRadius:"0px",
        borderTopLeftRadius:"0px",
        backgroundColor:"#3f51b5",
        borderBottomRightRadius:"0px",
        borderBottomLeftRadius:"0px",
    },
    buttonBottom:{
        borderTopRightRadius:"0px",
        borderTopLeftRadius:"0px",
        backgroundColor:"#3f51b5",
        borderBottomRightRadius:"10px",
        borderBottomLeftRadius:"0px",
    }
}))

export default function SocialIcons() {
    const classes = useStyles();
    return (
        <Hidden mdDown> 
            <div style={{position:"fixed",top:"40%",zIndex:"2",borderTopRightRadius:"10px",borderBottomRightRadius:"10px",boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"}} data-aos="fade-right" data-aos-duration="1000">
                <Grid direction="column" container className={classes.buttons} >
                    <Fab href="https://www.facebook.com/Paperly-110864100824156" target="_blank" className={classes.buttonTop} size="medium" aria-label="add">
                        <img src={FaceBook} />
                    </Fab>
                    <Fab href="https://twitter.com/paperlytech" target="_blank" className={classes.buttonMiddle}  size="medium" aria-label="add">
                        <img src={Twitter} />
                    </Fab>
                    <Fab href="https://www.instagram.com/paperly.tech/" target="_blank" className={classes.buttonMiddle}  size="medium" aria-label="add">
                        <img src={Instagram} />
                    </Fab>
                    <Fab href="https://www.reddit.com/user/paperlytech" target="_blank" className={classes.buttonMiddle}  size="medium" aria-label="add">
                        <img src={Reddit} />
                    </Fab>
                    <Fab href="https://github.com/IshankaDSenevirathne/Paperly" target="_blank" className={classes.buttonBottom} size="medium" aria-label="add">
                        <img src={GitHub} />
                    </Fab>
                </Grid>
            </div>
        </Hidden>
    )
}
