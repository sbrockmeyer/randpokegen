import './App.css';
import Poke1 from './components/Poke1';
import Poke2 from './components/Poke2';
import Poke3 from './components/Poke3';
import Poke4 from './components/Poke4';
import Poke5 from './components/Poke5';
import Poke6 from './components/Poke6';
import {useState} from 'react';

function App() {

  // 905 max, min 1
  const [id1, setID1] = useState('1');
  const [pokemon1, setPokemon1] = useState([]);
  const [pokeimg1, setPokeImg1] = useState([]);

  const getData1  = () =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id1}/`;

    fetch(url)
      .then(resp =>resp.json())
      .then(data => {
        setPokemon1(data)
        setPokeImg1(data.sprites);
      })
  }

  const randGen1 = (min, max) =>{
    return Math.floor(Math.random() * (max- min +1)) + min;
  }

  const generateTeam1 = (e) =>{
    e.preventDefault();
    console.log(`POKEMON`);
    setID1(randGen1(1, 905))
    getData1();
  }

  const [id2, setID2] = useState('1');
  const [pokemon2, setPokemon2] = useState([]);
  const [pokeimg2, setPokeImg2] = useState([]);

  const getData2  = () =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id2}/`;

    fetch(url)
      .then(resp =>resp.json())
      .then(data => {
        setPokemon2(data)
        setPokeImg2(data.sprites);
      })
  }

  const randGen2 = (min, max) =>{
    return Math.floor(Math.random() * (max- min +1)) + min;
  }

  const generateTeam2 = (e) =>{
    e.preventDefault();
    console.log(`POKEMON`);
    setID2(randGen2(1, 905))
    getData2();
  }

  return (
    <>
      <Poke1 poke={pokemon1} sprite={pokeimg1}/>
      <form onSubmit={generateTeam1}>
        <button>Pokemon</button>
      </form>
      <Poke2 poke={pokemon2} sprite={pokeimg2}/>
      <form onSubmit={generateTeam2}>
        <button>Pokemon</button>
      </form>
    </>
  );
}

export default App;
