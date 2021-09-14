import React, {Component} from "react";


class Gif extends Component {

    constructor(props){
        super(props);
        this.state = {
            gif: ""
        }
    }
    apiCall(url, consecuencia) {
        fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(error => console.log(error))
    }

    componentDidMount(){
        console.log("me monte")
        this.traerGifNuevo()
    }
    traerGifNuevo(){
        this.apiCall("https://api.giphy.com/v1/gifs/random?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU&tag=&rating=G", this.mostrarGif)

    }

    mostrarGif = (data) => {
        this.setState(
            {
                gif: data.data.image_url
            }
        )
    }

    componentDidUpdate(){
        console.log("me actualice")
        alert("tengo un gif nuevo")
    }
    render(){
        console.log("estoy renderizando")
        
        let contenido;

        if(this.state.gif === "") {
            contenido = <p>Cargando...</p>
        } else {
            contenido = <img src={this.state.gif}></img>
        }

    return (
        <div>
            {contenido}
            <button onClick={ () => this.traerGifNuevo()}>Random Gif</button>
        </div>
        
    );
    }
}

export default Gif;