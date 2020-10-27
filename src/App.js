import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// import Navbar from "./components/Navbar/Navbar";
// import Landing from "./components/Landing/Landing";

import QuizesPage from "./components/QuizesPage/QuizesPage";
import Landing from "./components/Land/Landing";
import Tos from "./components/tos/tos";
import Subjectmenu from "./components/subjectmenu/subjectmenu";
import SocialIcons from "./components/SocialIcons/SocialIcons";


AOS.init();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <SocialIcons />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/quizes" component={QuizesPage} />
          <Route path="/terms" component={Tos} />
          <Route path="/subjectmenu" component={Subjectmenu} />

          {/* <Route path="*" component={Notfound} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
// <Footer position="relative" />
