import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import RandomCocktail from "./pages/RandomCocktail";
import Error from "./pages/Error";
import FilterSearch from "./pages/FilterSearch";
// import components
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route exact path="/RandomCocktail">
          <RandomCocktail />
        </Route>
        <Route exact path="/FilterSearch">
          <FilterSearch />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
