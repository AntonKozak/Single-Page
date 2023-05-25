import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Home from './components/pages/home/Home';
import PokemonsList from './components/ui/pokemons/PokemonsList';
import Footer from './components/shared/footer/Footer';
import PokemonDetail from './components/ui/pokemons/pokemonDetail/PokemonDetail';
import Navbar from './components/shared/navbar/navbar';
import AddPokemon from './components/ui/pokemons/addPokemon/AddPokemon';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';

//css
import './assets/css/style.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const url = 'http://localhost:5020/v1/pokemons/';

  useEffect(() => {
    const loadPokemons = async () => {
      const { data } = await axios.get(url);
      setPokemons(data);
    }
    loadPokemons();
  }, []);

  const addPokemonHandler = async (e) => {
    e.preventDefault();
    let pokemonList = [];
    const name = e.target.pokemonname.value;
    const image = e.target.imageadress.value;
    // console.log(name);
    // console.log(image);
    const newPokemon = {name: name, image: image};
    const {data} = await axios.post(url, newPokemon);
    // console.log(data);

    pokemonList = [...pokemons, data];
    setPokemons(pokemonList);
  };

  return (
    <BrowserRouter>
    <Navbar/>
      <article className='page'>
        <section>
          <Routes>
            <Route path='/' element={<Home />}>
              {' '}
            </Route>
            <Route
              path='/pokemons'
              element={<PokemonsList pokemons={pokemons}/>}
            >
              {' '}
            </Route>
            <Route path='/about' element={<About />}> </Route>
            <Route path='/contact' element={<Contact />}> </Route>
            <Route path='/pokemon-detail' element={<PokemonDetail />}> </Route>
            <Route path='/add-pokemon' element={<AddPokemon  addPokemon={addPokemonHandler} pokemons={pokemons} />}> </Route>
          </Routes>
        </section>
      </article>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
