import React from "react";
import Case from "./Case";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    let k = 0;
    let list = [];
    for (let y = 0; y < this.props.y; y++) {
      for (let x = 0; x < this.props.x; x++) {
        list[k] = " ";
        k++;
      }
    }
    this.state = { list: list };
  }

  updateWidth() {
    this.setState({ width: window.innerWidth });
  }

  componentWillMount() {
    this.updateWidth();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth.bind(this));
    window.addEventListener("keypress", this.onKeyPress.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth.bind(this));
    window.removeEventListener("keypress", this.onKeyPress.bind(this));
  }

  onKeyPress(ev) {
    if (this.state.mysel) {
      let lst = this.state.list;
      lst[this.state.mysel] = ev.key;
      this.setState({ list: lst });
    }
  }

  myClick(v) {
    return () => {
      if (v === this.state.mysel) {
        let msg = prompt("Message", this.state.list[v]);
        if (msg !== null) {
          let lst = this.state.list;
          lst[v] = msg[0];
          this.setState({ list: lst });
        }
      } else {
        this.setState({ mysel: v });
      }
    };
  }

  render() {
    const size = 100;
    const viewBox = [0, 0, this.props.x * size, this.props.y * size];
    const CaseListe = [];
    let k = 0;
    for (let y = 0; y < this.props.y; y++) {
      for (let x = 0; x < this.props.x; x++) {
        CaseListe.push(
          <Case
            key={k}
            sel={this.state.mysel === k}
            x={x * size}
            y={y * size}
            width={size}
            height={size}
            show={this.props.show}
            content={this.state.list[k]}
            onClick={this.myClick(k)}
          />
        );
        k++;
      }
    }
    return (
      <svg id="play-grid" viewBox={viewBox} width={this.state.width}>
        {CaseListe}
      </svg>
    );
  }
}

export default Grid;
