import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, BudgetOverview, Settings, Transactions } from "pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/budget-overview">
          <BudgetOverview />
        </Route>
        <Route path="/transactions">
          <Transactions />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
