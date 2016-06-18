import React, { Component, PropTypes } from 'react';

class Character extends Component {
  render(){
    //TODO: recuperar props y pintar la fila de la rabla con las celdas
  }
}

Character.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired,
    seasons: PropTypes.arrayOf(PropTypes.number).isRequired,
    alive: PropTypes.bool.isRequired
  }).isRequired
}

export default Character;
