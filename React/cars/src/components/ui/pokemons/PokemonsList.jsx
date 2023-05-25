import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../header/PageHeader';
import Pokemon from './pokemon/Pokemon';

//CSS
import './pokemonList.css'

const VehicleList = ({ pokemons }) => {
  if (!pokemons || pokemons.lenght === 0) {
    return (
      <>
        <PageHeader headerText='No pokes to sale' />
      </>
    );
  }

  return (
    <section className='container-pokemon'>
      <PageHeader headerText={`Welcome to Vejby pokemon shop`} />
      <Link  to='/add-pokemon'><button className='btn fa-solid fa-plus'> Add Pokemon </button> </Link>
      <div className='sub-title'>{`In house ${pokemons.length} pokemons to sale`}</div>
      <section className='pokemons-gallery'>
        {pokemons.map((pokemon) => (
          <React.Fragment key={pokemon.id}>
            <Pokemon pokemon={pokemon} />
          </React.Fragment>
        ))}
      </section>
    </section>
  );
};

export default VehicleList;
