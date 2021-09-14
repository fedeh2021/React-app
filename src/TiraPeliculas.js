import React from "react";
import Pelicula from './Pelicula';

function TiraPeliculas(){
    return(
        <div>
            <Pelicula generos={["Fantasia", "Aventuras"]} rating={9.2} titulo="Toy Story"/>
            <Pelicula generos={["Acción", "Aventuras"]} rating={9.2} titulo="Star Wars"/>
            <Pelicula generos={["Drama"]} rating={8.5} titulo="Titanic"/>
            <Pelicula generos={["Acción", "Ciencia Ficción"]} rating={7.5} titulo="Avengers"/>
        </div>
    )
}

export default TiraPeliculas;