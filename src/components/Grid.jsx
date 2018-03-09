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
    this.setState({
      width: window.innerWidth,
      height: this.props.y * window.innerWidth / this.props.x
    });
  }

  componentWillMount() {
    this.updateWidth();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth.bind(this));
    window.addEventListener("keydown", this.onKeyPress.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth.bind(this));
    window.removeEventListener("keydown", this.onKeyPress.bind(this));
  }

  Delta(delta) {
    return (
      (this.state.mysel + this.props.x * this.props.y + delta) %
      (this.props.x * this.props.y)
    );
  }

  onKeyPress(ev) {
    if (this.state.mysel !== null) {
      if (ev.key === "ArrowLeft") {
        this.setState({ mysel: this.Delta(-1) });
      } else if (ev.key === "ArrowRight") {
        this.setState({ mysel: this.Delta(1) });
      } else if (ev.key === "ArrowUp") {
        this.setState({ mysel: this.Delta(-this.props.x) });
      } else if (ev.key === "ArrowDown") {
        this.setState({ mysel: this.Delta(this.props.x) });
      } else if (ev.key.length === 1) {
        let lst = this.state.list;
        lst[this.state.mysel] = ev.key;
        this.setState({ list: lst });
      }
    }
  }

  myClick(v) {
    return () => {
      if (v === this.state.mysel) {
        let msg = prompt("Entrez une lettre", this.state.list[v]);
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
      <svg
        id="play-grid"
        viewBox={viewBox}
        width={this.state.width}
        height={this.state.height}
        preserveAspectRatio={"none"}
      >
        {CaseListe}
      </svg>
    );
  }
}

export default Grid;
