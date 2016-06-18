import React from 'react';

//TODO: mostrar el total de resultados
const Summary = (props) => (
  <div className="search-results-summary">
    <div className="row">
      Encontrados <span className="search-results-total">Aqui mostraremos el total de personajes</span> personajes
    </div>
  </div>
);

Summary.propTypes = {
  total: React.PropTypes.number.isRequired
}

export default Summary;
