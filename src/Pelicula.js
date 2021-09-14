import React from "react";
import PropTypes from 'prop-types';

function Pelicula(props) {
    let listadoDeGeneros;
    if(props.generos != null) {
        listadoDeGeneros =
        <ul>
            {props.generos.map((genero, i) => <li key={genero + i}> {genero}</li>)}
        </ul>
    } else {
        listadoDeGeneros = "";
    }

return(
    <div>
    <h2 className="">{props.titulo}</h2>
    <p>Rating: {props.rating}</p>
    {listadoDeGeneros}
    </div>
);
}
Pelicula.defaultProps = {
    rating: "Esta pelicula no tiene puntaje",
    generos: null
}
Pelicula.propTypes = {
    rating: PropTypes.number,
    titulo: PropTypes.string
}

export default Pelicula;