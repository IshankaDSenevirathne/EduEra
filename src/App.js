import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import QuizesPage from "./components/QuizesPage/QuizesPage";
import Landing from "./components/Land/Landing";
import Tos from "./components/tos/tos";
import SubjectMenu from "./components/subjectmenu/subjectmenu";
import SocialIcons from "./components/SocialIcons/SocialIcons";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";


AOS.init();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <SocialIcons />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/quizes" component={QuizesPage} />
          <Route path="/terms" component={Tos} />
          <Route path="/subjectmenu" component={SubjectMenu} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
