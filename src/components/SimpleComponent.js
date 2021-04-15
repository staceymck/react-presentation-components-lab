import React from 'react'

export default class SimpleComponent extends React.Component {

  state = {
    mood: "happy"
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        mood: (prevState.mood === "happy" ? "sad" : "happy")
      }
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}