import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProjectList from "./components/project/ProjectList";
import Project from "./components/project/Project";
import Markdown from "./components/project/Markdown";
import "./App.scss";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Switch>
        <Route path="/projectList" component={ProjectList} />
        <Route path="/project/:projectId" component={Project} />
        <Route path="/editProject/:projectId" component={Markdown} />
        <Redirect from="/" to="/projectList" />
      </Switch>
    </div>
  );
};

export default App;
