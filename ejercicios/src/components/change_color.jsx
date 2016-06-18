import React, { Component } from 'react'

const colors = ['red', 'blue', 'green', 'lime', 'gray', 'black', 'gold']

function getRandomColor() {
  return colors[Math.floor(Math.random() * 100) % colors.length]
}

class ColoredText extends Component {
  render() {
    return (
      <p style={{color: this.props.color}}>Este texto debe cambiar de color</p>
    )
  }
}

class ChangeColor extends Component {
  constructor(props){
    super(props)
    //SET state and bind handlers
  }
  //state handlers
  render(){
    return (
      <div>
        <h1>Cambia de color</h1>
        <button>Haz click aquí para cambiar el texto de color</button>
        //TODO include ColoredText component
      </div>
    )
  }
}

export default ChangeColor
