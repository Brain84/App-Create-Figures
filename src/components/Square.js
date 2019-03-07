import React, { Component } from 'react';
import '../styles/Square.scss';

class Square extends Component {

  state = {
    valueInput: "",
    sizeSquare: 10,
    visableSquare: false,
  }

  handleChange = e => {
    this.setState({
      valueInput: e.target.value
    })
  }
  handleCreateSquare = (e) => {
    e.preventDefault();
    this.setState({
      visableSquare: true,
      sizeSquare: this.state.valueInput * 1
    })
  }

  render() {
    let styleSquare = {
      backgroundColor: "#D9EC1B",
      width: 20,
      height: 20,
      margin: "20px auto",
    }
    if (this.state.visableSquare) {
      styleSquare.width = this.state.sizeSquare;
      styleSquare.height = this.state.sizeSquare;
      styleSquare.transition = "1s";
    }

    return (
      <>
        <form className="form__square">
          <input
            type="number"
            min="10"
            placeholder="Enter length of line"
            value={this.state.valueInput}
            onChange={this.handleChange}
          />
          <button className="btn__square" onClick={this.handleCreateSquare}>Create square</button>
        </form>
        <div style={styleSquare}></div>
      </>
    )
  }
}

export default Square;