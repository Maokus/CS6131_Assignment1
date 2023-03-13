import React from "react";
import {
  Switch,
  Route,
  withRouter,
  useLocation,
  HashRouter
} from "react-router-dom";
import './output.css';

import LandingPage from "./Containers/landingPage";
import NavBar from "./Components/navBar";
import AboutPage from "./Containers/aboutPage";
import ItemsPage from "./Containers/itemsPage";
import EventsPage from "./Containers/eventsPage";
import LoginPage from "./Containers/loginPage";
import EventsEditPage from "./Containers/eventsEditPage";
import MembersPage from "./Containers/membersPage";
import PossessionPage from "./Containers/possessionPage";



function App() {

  const location = useLocation();

  const navBarItems = [
    ["Home", "/"],
    ["About", "/about"],
    ["Items", "/items"],
    ["Members", "/members"],
    ["Possession", "/Possession"],
    ["Events", "/events"],
    ["Login", "/login"],
  ]

  return (
    <div>
      <HashRouter>
        <NavBar items={navBarItems} currentPath={location.pathname} />
        <Switch>
          <Route path="/about" component={AboutPage} ></Route>
          <Route path="/items" component={ItemsPage} ></Route>
          <Route path="/events" component={EventsPage} ></Route>
          <Route path="/events/:eventid" component={EventsEditPage} ></Route>
          <Route path="/login" component={LoginPage} ></Route>
          <Route path="/members" component={MembersPage} ></Route>
          <Route path="/possession" component={PossessionPage} ></Route>
          <Route path="/" component={LandingPage} ></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default withRouter(App);

