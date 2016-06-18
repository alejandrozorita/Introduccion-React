import React, { Component } from 'react'

const colors = ['red', 'blue', 'green', 'lime', 'gray', 'black', 'gold']

function getRandomColor() {
  return colors[Math.floor(Math.random() * 100) % colors.length]
}

class ColoredText extends Component {
  render() {
    return (
      <p style={{color: this.props.color}}>{this.props.children}</p>
    )
  }
}

class ChangeColor extends Component {
  constructor(props){
    super(props)
    this.state = {textColor: colors[0]}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    e && e.preventDefault()
    this.setState({textColor: getRandomColor()})
  }
  render(){
    return (
      <div>
        <h1>Cambia de color</h1>
        <button onClick={this.handleClick}>Haz click aquí para cambiar el texto de color</button>
        <ColoredText color={this.state.textColor}>
          Este texto debe cambiar de color
        </ColoredText>
      </div>
    )
  }
}

export default ChangeColor
