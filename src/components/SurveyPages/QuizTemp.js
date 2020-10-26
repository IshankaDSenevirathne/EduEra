import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Pagination from "@material-ui/lab/Pagination";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import Timer from "./Timer/Timer";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(5),
  },
  button: {
    width: "200px",
    margin: theme.spacing(1, 1, 0, 0),
  },
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  radio: {
    color: "white",
  },

  pagination: {
    "& .MuiPaginationItem-root": {
      color: "white",
    },
  },
}));

export default function QuizTemp(props) {
  const classes = useStyles();

  // const answersHolder = [0, 0, 0];
  // const timeHolder = [0, 0, 0];
  const answersHolder = Array.from({ length: 50 }, (_, i) => 0); // [0, 0, 0];
  const timeHolder = Array.from({ length: 50 }, (_, i) => 0); //[0, 0, 0];

  // Array.from();
  // Array.from({ length: 10 }, (_, i) => 0);
  //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const { paper, questions, getAnswers, getTimeSpent } = props;
  const [activeQuestion, setActiveQuestion] = React.useState(0);
  const [answers, setAnswers] = React.useState(answersHolder);
  const [timeSpent, setTimeSpent] = React.useState(timeHolder);
  const [startingTime, setStartingTime] = React.useState(new Date().getTime());
  const [value, setValue] = React.useState(null);
  const [checkLast, setCheckLast] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverityType] = React.useState("info");
  const [alert, setAlertText] = React.useState("Please select an option!");

  const handleRadioChange = (event) => {
    const answer = event.target.value;
    setValue(answer);

    console.log(answer);
    console.log(parseInt(answer));
    console.log(answers[activeQuestion]);

    setAnswers((answers) => {
      answers[activeQuestion] = answer;
      return answers;
    });
  };

  React.useEffect(() => {
    getAnswers(answers, timeSpent, checkLast);
  }, [answers, getAnswers]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) {
      setOpen(true);
      setSeverityType("info");
      setAlertText("Please select an option!");
    } else if (value === questions[activeQuestion].correctAnswer) {
      setOpen(true);
      setSeverityType("success");
      setAlertText("Your answer is correct!");
    } else if (value && value !== questions[activeQuestion].correctAnswer) {
      setOpen(true);
      setSeverityType("error");
      setAlertText("Sorry, your answer is incorrect!");
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setOpen(false);
      return;
    }

    setOpen(false);
  };
  const handlePageChange = (event, page) => {
    const q = page - 1;

    const endingTime = new Date().getTime();
    setTimeSpent((timeSpent) => {
      const timeDiffInSec = Math.round((endingTime - startingTime) / 1000) % 60;
      timeSpent[activeQuestion] =
        parseInt(timeSpent[activeQuestion]) + parseInt(timeDiffInSec);
      return timeSpent;
    });

    if (answers[q] != "") {
      setValue(answers[q]);
    } else {
      setValue(null);
    }
    setActiveQuestion(q);
    setStartingTime(endingTime);
    if (page == 3) {
      setCheckLast(true);
    } else {
      setCheckLast(false);
    }
    console.log(timeSpent);
  };

  return (
    <div style={{ color: "white" }}>
      <div
        style={{
          color: "#1fa2ff",
          textTransform: "uppercase",
          paddingTop: "60px",
        }}
      >
        <h1>{paper}</h1>
      </div>
      <div style={{ textAlign: "left"}}>
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset" className={classes.formControl}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <FormLabel component="legend">
                <Timer getTimeSpent={getTimeSpent} />

                <h3 style={{ color: "white" }}>
                  {activeQuestion + 1} ) {questions[activeQuestion].title}
                </h3>

                {questions[activeQuestion].img && (
                  <div style={{textAlign:"center"}}>
                    <img
                      style={{ width: questions[activeQuestion].imgwidth }}
                      src={questions[activeQuestion].img}
                    />
                  </div>
                )}
              </FormLabel>
            </Grid>

            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={parseInt(value)}
              onChange={handleRadioChange}
            >
              {/* <FormControlLabel
                // value={questions[activeQuestion].choices[0]}
                value={1}
                control={<Radio color="primary" className={classes.radio} />}
                label={questions[activeQuestion].choices[0]}
              />
              <FormControlLabel
                // value={questions[activeQuestion].choices[1]}
                value={2}
                control={<Radio color="primary" className={classes.radio} />}
                label={questions[activeQuestion].choices[1]}
              />
              <FormControlLabel
                // value={questions[activeQuestion].choices[2]}
                value={3}
                control={<Radio color="primary" className={classes.radio} />}
                label={questions[activeQuestion].choices[2]}
              />
              <FormControlLabel
                // value={questions[activeQuestion].choices[3]}
                value={4}
                control={<Radio color="primary" className={classes.radio} />}
                label={questions[activeQuestion].choices[3]} */}
              {/* /> */}
              {/* {questions[activeQuestion].choices[4].text && (
                <FormControlLabel
                  value={questions[activeQuestion].choices[4].id}
                  control={<Radio color="primary" className={classes.radio} />}
                  label={questions[activeQuestion].choices[4].text}
                />
              )} */}
              {/* {questions[activeQuestion].choices[4].img && ( */}
              {/* <FormControlLabel
                value={questions[activeQuestion].choices[4].id}
                control={<Radio color="primary" className={classes.radio} />}
                // label={questions[activeQuestion].choices[4].text}
                label={
                  <>
                    {questions[activeQuestion].choices[4].img && (
                      <>
                        <img
                          src={questions[activeQuestion].choices[4].img}
                          key={questions[activeQuestion].choices[4].id}
                          className="profile-img"
                          width={questions[activeQuestion].choices[4].imgwidth}
                          height="auto"
                          style={{ marginRight: "5px" }}
                        />
                        <br />
                      </>
                    )}

                    {questions[activeQuestion].choices[4].text}
                  </>
                }
              /> */}

              {questions[activeQuestion].choices.map((ele, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={ele.id}
                    control={
                      <Radio color="primary" className={classes.radio} />
                    }
                    // label={questions[activeQuestion].choices[4].text}
                    label={
                      <>
                        {ele.img && (
                          <>
                            <img
                              src={ele.img}
                              key={ele.id}
                              className="profile-img"
                              width={ele.imgwidth}
                              height="auto"
                              style={{ marginRight: "5px" }}
                            />
                            <br />
                          </>
                        )}

                        {ele.text}
                      </>
                    }
                  />
                );
              })}

              {/* )} */}
            </RadioGroup>
            <br></br>
            <FormHelperText>
              <span style={{ color: "white" }}>Review your answer now</span>
            </FormHelperText>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Check Answer
            </Button>
          </FormControl>
        </form>
      </div>
      <div>
        <hr></hr>
        <Grid container direction="row" justify="center" alignItems="center">
          <div className={classes.root}>
            <Pagination
              count={50}
              showFirstButton
              showLastButton
              color="primary"
              className={classes.pagination}
              siblingCount={2}
              onChange={handlePageChange}
              defaultPage={1}
            />
          </div>
        </Grid>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <MuiAlert elevation={6} variant="filled" severity={severity}>
          {alert}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
