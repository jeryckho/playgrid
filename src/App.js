import React from "react";
import Grid from "./components/Grid";

class App extends React.Component {
  render() {
    const qs = {
      x: 9,
      y: 9,
      show: true
    };
    return <Grid x={qs.x} y={qs.y} show={qs.show} />;
  }
}

export default App;
