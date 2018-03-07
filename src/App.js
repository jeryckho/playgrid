import React from 'react';
import ReactQueryParams from 'react-query-params';
import Grid from './components/Grid';


class App extends ReactQueryParams {
  defaultQueryParams = {
    x: 9,
    y: 9,
    show: false
  }

  render() {
    const qs = this.queryParams;
    return (
      <Grid x={qs.x} y={qs.y} show={qs.show} />
    );
  }
}

export default App;
