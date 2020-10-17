import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import AccessTime from "@material-ui/icons/AccessTime";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";

import { teal } from "@material-ui/core/colors";
import MarksPercentile from "./Graph/graph";

const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: "10px 10px 10px 10px",
    background: "#2a3136",
  },
  bottom: {
    color: "#363f44",
  },
  top: {
    color: "primary",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

function MyCircularProgress(props) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          className={classes.bottom}
          size={200}
          thickness={4}
          {...props}
          value={100}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div">
            <span style={{ color: "whitesmoke" }}>{`${Math.round(
              props.value
            )}%`}</span>
          </Typography>
        </Box>
        <CircularProgress
          variant="static"
          className={classes.top}
          classes={{
            circle: classes.circle,
          }}
          size={200}
          thickness={4}
          {...props}
        />
      </Box>
    </div>
  );
}

MyCircularProgress.propTypes = {
  value: PropTypes.number.isRequired,
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#363f44",
    borderRadius: "4px",
    paddingRight: "15px",
    color: "white",
  },
  paper: {
    background: "#363f44",
    borderRadius: "4px",
  },
}));

export default function Results(props) {
  const classes = useStyles();
  const { answers, questions, paper, timeSpent } = props;
  const [graphData, setgraphData] = useState([]);
  const [marks, setmarks] = useState(0);

  useEffect(() => {
    console.log(answers);
    console.log(questions);
    console.log(120 * 60 - timeSpent);

    console.log(paper);
    console.log(props);

    let correctAnswers = 0;

    questions.map((question) => {
      const index = questions.indexOf(question);
      const userAnswer = answers[index];
      const correctAnswer = question.correctAnswer;
      const result = correctAnswer == userAnswer;
      if (result) {
        correctAnswers++;
      }
    });
    const progress = Math.round((correctAnswers * 100) / 50);
    console.log(progress);
    setmarks(progress);
    fetch(
      `https://paperly-114b9e.us1.kinto.io/landingstats/papersubmission?submissions=${progress}&paper=${props.paperName}&paperyear=${props.paperYear}`
      // `http://localhost:5000/landingstats/papersubmission?submissions=${progress}&paper=${props.paperName}&paperyear=${props.paperYear}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          let graphdata = {
            id: `${props.paperName} ${props.paperYear} Marks`,
            color: "hsl(205°, 100%, 56%)",
            data: data.submissionGraphData,
          };

          setgraphData([graphdata]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const evaluatedResults = (answers, questions, timeSpent) => {
    let correctAnswers = 0;
    const elapsedTime = 120 * 60 - timeSpent;
    let hours = Math.floor(elapsedTime / 3600);
    const spentHours = hours * 60;
    let minutes = Math.floor(elapsedTime / 60 - spentHours);
    let seconds = elapsedTime % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (elapsedTime <= 0) {
      hours = 0;
      minutes = "0" + 0;
      seconds = "0" + 0;
    }

    questions.map((question) => {
      const index = questions.indexOf(question);
      const userAnswer = answers[index];
      const correctAnswer = question.correctAnswer;
      const result = correctAnswer == userAnswer;
      if (result) {
        correctAnswers++;
      }
    });
    const progress = Math.round((correctAnswers * 100) / 50);

    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ paddingBottom: "20px", color: "white" }}>
          <h3>Evaluation</h3>
        </div>
        <MyCircularProgress value={progress} />
        <div
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            color: "white",
            backgroundColor: "#2a3136",
            borderRadius: "4px",
          }}
        >
          <Paper elevation={3} className={classes.paper}>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: "#2a3136" }}>
                    <CheckCircleOutline style={{ color: teal["A400"] }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Correct Answers"
                  secondary={correctAnswers + "/50"}
                  secondaryTypographyProps={{ color: "whitesmoke" }}
                />
              </ListItem>
              <Divider variant="inset" component="li" />

              <ListItem>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: "#2a3136" }}>
                    <AccessTime color="primary" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Time elapsed"
                  secondary={"0" + hours + ":" + minutes + ":" + seconds}
                  secondaryTypographyProps={{ color: "whitesmoke" }}
                />
              </ListItem>
            </List>
          </Paper>{" "}
          <MarksPercentile
            data={graphData}
            paperName={props.paperName}
            paperYear={props.paperYear}
            mark={marks}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div
        style={{
          color: "#1fa2ff",
          textTransform: "uppercase",
          paddingTop: "60px",
        }}
      >
        <h1>{paper}</h1>
      </div>
      <div className="evaluation">
        {evaluatedResults(answers, questions, timeSpent)}
      </div>
    </div>
  );
}
