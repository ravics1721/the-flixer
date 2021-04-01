import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Movie from "./Components/Movie";
import Person from "./Components/Person";
import Search from "./Components/Search";
import Tv from "./Components/Tv";
import Movies from "./Components/Movies";
import Tvs from "./Components/Tvs";

function Application() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:mid" component={Movie} />
        <Route path="/tv/:tid" component={Tv} />
        <Route path="/person/:pid" component={Person} />
        <Route path="/search" component={Search} />
        <Route path="/movies" component={Movies} />
        <Route path="/tv-shows" component={Tvs} />
      </Switch>
    </BrowserRouter>
  );
}

export default Application;
