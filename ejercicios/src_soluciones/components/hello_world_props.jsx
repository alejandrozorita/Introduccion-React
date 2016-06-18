import React, { Component } from 'react'

const nameStyle = {
  fontFamily: 'Helvetica, Geneva, sans-serif',
  fontSize: 14,
  backgroundColor: '#f93',
  color: '#fff',
  padding: '6px 4px',
  fontWeight: 'bold',
  borderRadius: 8
}

class HelloWorldProps extends Component {
  render() {
    return (
      <div>
        <h1>Hola Mundo con propiedades</h1>
        <p>Te saludo <span style={nameStyle}>{this.props.name}</span>, tu nombre tiene {this.props.name.length} letras.</p>
      </div>
    )
  }
}

HelloWorldProps.propTypes = {
  name: React.PropTypes.string.isRequired
}

HelloWorldProps.defaultProps = {
  name: 'Homer J. Simpson'
}

export default HelloWorldProps
