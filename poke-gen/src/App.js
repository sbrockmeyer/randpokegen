import './App.css';
import Team from './components/Team';
import {useState} from 'react';

function App() {

  // 905 max, min 1
  const [id, setID] = useState('1');
  const [pokemon, setPokemon] = useState([]);
  const [pokeimg, setPokeImg] = useState([]);

  const getData  = () =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    fetch(url)
      .then(resp =>resp.json())
      .then(data => {
        setPokemon(data)
        setPokeImg(data.sprites);
      })
  }

  const randGen = (min, max) =>{
    return Math.floor(Math.random() * (max- min +1)) + min;
  }

  const generateTeam = (e) =>{
    e.preventDefault();
    console.log(`POKEMON`);
    setID(randGen(1, 905))
    getData();
  }

  return (
    <>
      <Team poke={pokemon} sprite={pokeimg}/>
      <form onSubmit={generateTeam}>
        <button>Generate Team</button>
      </form>
    </>
  );
}

export default App;
