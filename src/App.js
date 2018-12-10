import React, { Component } from 'react';
import AppRoutes from "./router/app_routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRoutes/>
      </div>
    );
  }
}

export default App;