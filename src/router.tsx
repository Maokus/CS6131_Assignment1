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
import MyItemsPage from "./Containers/myItemsPage";
import ItemsPage from "./Containers/itemsPage";
import EventsPage from "./Containers/eventsPage";
import LoginPage from "./Containers/loginPage";



function App() {

  const location = useLocation();

  const navBarItems = [
    ["Home", "/"],
    ["About", "/about"],
    ["My Items", "/myitems"],
    ["Items", "/items"],
    ["Events", "/events"],
    ["Login", "/login"],
  ]

  return (
    <div>
      <HashRouter>
        <NavBar items={navBarItems} currentPath={location.pathname} />
        <Switch>
          <Route path="/about" component={AboutPage} ></Route>
          <Route path="/myitems" component={MyItemsPage} ></Route>
          <Route path="/items" component={ItemsPage} ></Route>
          <Route path="/events" component={EventsPage} ></Route>
          <Route path="/login" component={LoginPage} ></Route>
          <Route path="/" component={LandingPage} ></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default withRouter(App);

