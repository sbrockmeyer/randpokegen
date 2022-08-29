import './App.css';
import Poke1 from './components/Poke1';
import Poke2 from './components/Poke2';
import Poke3 from './components/Poke3';
import Poke4 from './components/Poke4';
import Poke5 from './components/Poke5';
import Poke6 from './components/Poke6';
import {useState} from 'react';

function App() {

  // first pokemon
  const [id1, setID1] = useState('42');
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

  // poke 2

  const [id2, setID2] = useState('21');
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

    // poke 3

    const [id3, setID3] = useState('669');
    const [pokemon3, setPokemon3] = useState([]);
    const [pokeimg3, setPokeImg3] = useState([]);
  
    const getData3  = () =>{
      const url = `https://pokeapi.co/api/v2/pokemon/${id3}/`;
  
      fetch(url)
        .then(resp =>resp.json())
        .then(data => {
          setPokemon3(data)
          setPokeImg3(data.sprites);
        })
    }
  
    const randGen3 = (min, max) =>{
      return Math.floor(Math.random() * (max- min +1)) + min;
    }
  
    const generateTeam3 = (e) =>{
      e.preventDefault();
      console.log(`POKEMON`);
      setID3(randGen3(1, 905))
      getData3();
    }

        // poke 4

        const [id4, setID4] = useState('45');
        const [pokemon4, setPokemon4] = useState([]);
        const [pokeimg4, setPokeImg4] = useState([]);
      
        const getData4  = () =>{
          const url = `https://pokeapi.co/api/v2/pokemon/${id4}/`;
      
          fetch(url)
            .then(resp =>resp.json())
            .then(data => {
              setPokemon4(data)
              setPokeImg4(data.sprites);
            })
        }
      
        const randGen4 = (min, max) =>{
          return Math.floor(Math.random() * (max- min +1)) + min;
        }
      
        const generateTeam4 = (e) =>{
          e.preventDefault();
          console.log(`POKEMON`);
          setID4(randGen4(1, 905))
          getData4();
        }

            // poke 5

    const [id5, setID5] = useState('13');
    const [pokemon5, setPokemon5] = useState([]);
    const [pokeimg5, setPokeImg5] = useState([]);
  
    const getData5  = () =>{
      const url = `https://pokeapi.co/api/v2/pokemon/${id5}/`;
  
      fetch(url)
        .then(resp =>resp.json())
        .then(data => {
          setPokemon5(data)
          setPokeImg5(data.sprites);
        })
    }
  
    const randGen5 = (min, max) =>{
      return Math.floor(Math.random() * (max- min +1)) + min;
    }
  
    const generateTeam5 = (e) =>{
      e.preventDefault();
      console.log(`POKEMON`);
      setID5(randGen5(1, 905))
      getData5();
    }

        // poke 6

        const [id6, setID6] = useState('420');
        const [pokemon6, setPokemon6] = useState([]);
        const [pokeimg6, setPokeImg6] = useState([]);
      
        const getData6 = () =>{
          const url = `https://pokeapi.co/api/v2/pokemon/${id6}/`;
      
          fetch(url)
            .then(resp =>resp.json())
            .then(data => {
              setPokemon6(data)
              setPokeImg6(data.sprites);
            })
        }
      
        const randGen6 = (min, max) =>{
          return Math.floor(Math.random() * (max- min +1)) + min;
        }
      
        const generateTeam6 = (e) =>{
          e.preventDefault();
          console.log(`POKEMON`);
          setID6(randGen6(1, 905))
          getData6();
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
      <Poke3 poke={pokemon3} sprite={pokeimg3}/>
      <form onSubmit={generateTeam3}>
        <button>Pokemon</button>
      </form>
      <Poke4 poke={pokemon4} sprite={pokeimg4}/>
      <form onSubmit={generateTeam4}>
        <button>Pokemon</button>
      </form>
      <Poke5 poke={pokemon5} sprite={pokeimg5}/>
      <form onSubmit={generateTeam5}>
        <button>Pokemon</button>
      </form>
      <Poke6 poke={pokemon6} sprite={pokeimg6}/>
      <form onSubmit={generateTeam6}>
        <button>Pokemon</button>
      </form>
    </>
  );
}

export default App;
