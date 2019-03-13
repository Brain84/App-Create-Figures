import React, { Component } from 'react';
import '../styles/Triangle.scss';

class Triangle extends Component {

  state = {
    valueInput: "",
    sizeTriangle: 10,
    visableTriangle: false,
  }

  handleChange = e => {
    this.setState({
      valueInput: e.target.value
    })
  }
  handleCreateTriangle = e => {
    e.preventDefault();
    this.setState({
      visableTriangle: true,
      sizeTriangle: this.state.valueInput * 1
    })
  }

  render() {
    let styleTriangle = {
      width: 0,
      height: 0,
      borderLeft: "10px solid transparent",
      borderRight: "10px solid transparent",
      borderBottom: "17px solid #F34A53",
      margin: "20px auto"
    }
    if (this.state.visableTriangle) {
      styleTriangle.borderLeft = this.state.sizeTriangle / 2 + "px solid transparent";
      styleTriangle.borderRight = this.state.sizeTriangle / 2 + "px solid transparent";
      styleTriangle.borderBottom = (this.state.sizeTriangle * 1.7321) / 2 + "px solid #F34A53";
      styleTriangle.transition = "1s";
    }

    return (
      <>
        <form className="form__triangle" >
          <input
            type="number"
            min="10"
            placeholder="Enter length of line"
            value={this.state.valueInput}
            onChange={this.handleChange}
          />
          <button className="btn__triangle" onClick={this.handleCreateTriangle}>Create triangle</button>
        </form>
        <div style={styleTriangle}></div>
      </>
    )
  }
}

export default Triangle;