import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './containers/Main/Main';
import RogueBlitz from "../src/containers/Portfolio-Pages/RogueBlitz";
import NoteDrop from "../src/containers/Portfolio-Pages/NoteDrop";
import NoteTaker from "../src/containers/Portfolio-Pages/NoteTaker";
import WorkPlanner from "../src/containers/Portfolio-Pages/WorkPlanner";
import FitnessTracker from "../src/containers/Portfolio-Pages/FitnessTracker";
import TeamGenerator from "../src/containers/Portfolio-Pages/TeamGenerator";


function App() {
  return (
    <Router>

      <Route exact path="/" component={Main} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/rogueblitz" component={RogueBlitz} />
      <Route exact path="/notedrop" component={NoteDrop} />
      <Route exact path="/notetaker" component={NoteTaker} />
      <Route exact path="/workplanner" component={WorkPlanner} />
      <Route exact path="/fitnesstracker" component={FitnessTracker} />
      <Route exact path="/team-generator" component={TeamGenerator} />

    </Router>
  );
}

export default App;