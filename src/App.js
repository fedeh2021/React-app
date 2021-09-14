import logo from './logo.svg';
import './App.css';
import TiraPeliculas from './TiraPeliculas';
import Gif from './Gif';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
<main>
      <Gif/>
      <TiraPeliculas titulo = 'Harry Potter'></TiraPeliculas>
     <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>

</main>
      </header>
 
    </div>
  );
}

export default App;




