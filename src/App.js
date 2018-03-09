import React from "react";
import Grid from "./components/Grid";

class App extends React.Component {
  getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(window.location.search);
    return results === null
      ? null
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  render() {
    let x = this.getUrlParameter('x');
    let y = this.getUrlParameter('y');
    let show = this.getUrlParameter('show');
    return <Grid x={x ? x : 9} y={y ? y : 9} show={show ? show  : false} />;
  }
}

export default App;
