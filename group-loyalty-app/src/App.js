
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Dashboard, Transactions, Deals } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Dashboard />} />
          <Route path="/transactions" exact component={() => <Transactions />} />
          <Route path="/deals" exact component={() => <Deals />} />
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
