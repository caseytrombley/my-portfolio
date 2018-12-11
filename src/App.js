import React, { Component } from 'react';
import AppRoutes from "./router/app_routes";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppRoutes/>
      </React.Fragment>
    );
  }
}

export default App;