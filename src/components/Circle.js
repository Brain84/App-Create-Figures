import React, { Component } from 'react';
import '../styles/Circle.scss';

class Circle extends Component {

  state = {
    valueInput: "",
    sizeCircle: 10,
    visableCircle: false
  }

  handleChange = e => {
    this.setState({
      valueInput: e.target.value
    })
  }
  handleCreateCircle = (e) => {
    e.preventDefault();
    this.setState({
      visableCircle: true,
      sizeCircle: this.state.valueInput * 1
    })
  }

  render() {
    let styleCircle = {
      width: 20,
      height: 20,
      backgroundColor: "#359EEC",
      borderRadius: "50%",
      margin: "20px auto"
    }
    if (this.state.visableCircle) {
      styleCircle.width = this.state.sizeCircle;
      styleCircle.height = this.state.sizeCircle;
      styleCircle.transition = "1s";
    }

    return (
      <>
        <form className="form__circle" >
          <input
            type="number"
            min="10"
            placeholder="Enter length of diameter"
            value={this.state.valueInput}
            onChange={this.handleChange}
          />
          <button className="btn__circle" onClick={this.handleCreateCircle}>Create circle</button>
        </form>
        <div style={styleCircle}></div>
      </>
    )
  }
}

export default Circle;