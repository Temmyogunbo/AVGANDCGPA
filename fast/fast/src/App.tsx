import React from "react";
import "./App.css";
import { Switch, Route, Router } from "react-router-dom";
import HomePage from "./pages/home";
import { createBrowserHistory } from "history";
import { SiteHeader } from "./components/site-header";
import store from "./redux/store";
import { Provider } from "react-redux";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <SiteHeader />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
