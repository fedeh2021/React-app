import {useState, useEffect, useRef} from 'react';
function RickMortyFn(){
    const [personajes, setPersonajes] = useState([]);
    const [pagina, setPagina] = useState(1); // gestionar ciclo de vida de componente
    const subtitle = useRef(); //captura y cambiar algo del dom
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            setPersonajes(data.results)
        })
        .catch(error => console.error(error))
    }, [])

    useEffect(() => {
        console.log('se actualizo')
    }, [personajes])

    useEffect(() => {
        return() => console.log('se desmonto')
    }, [])

    const cargarMas = async () => {
        await setPagina(pagina + 1);
        console.log(pagina)
        console.log(`https://rickandmortyapi.com/api/character?page=${pagina}`);
        fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
        .then(response => response.json())
        .then(data => {
            setPersonajes(data.results);
        })
        .catch(error => console.error(error))
    }
    const cambiarH2 = () => {
        subtitle.current.style.color = 'red';
    }
    return(
        <div>
            <h2 ref={subtitle}>soy el componente rick function</h2>
            <button onClick={cambiarH2}>Cambiar al h2</button>
            <h3>Estas en la pagina:  {pagina}</h3>
            <ul>
            {personajes.length === 0 && <p>Cargando</p>}
            {
                personajes.map((personaje, i) => {
                    return (
                        <li key={i}>
                        <h3>{personaje.name}</h3>
                        <img src={personaje.image} alt="avatar" width="150"/>
                        </li>
                    )
                })
                    }
                    <button onClick={cargarMas}>Siguiente</button>
                </ul>
            </div>
    )
}

export default RickMortyFn;