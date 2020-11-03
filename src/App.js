import React, { Component } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Pages";
import Blank from "./components/Pages/Blank";
import { store } from "./helpers";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";

const wrapperDashboard = Wrapper(Dashboard);
const wrapperBlank = Wrapper(Blank);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={wrapperDashboard} />
            <Route exact path="/blank" component={wrapperBlank} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
