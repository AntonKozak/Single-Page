import { Link } from 'react-router-dom';
import Card from '../../Card/Card';

import './pokemon.css';


const Pokemon = ({ pokemon }) => {
  return (
    <Card key={pokemon.id}>
      <img className='pokemon-image' src={pokemon.image} alt='' />
      <h3 className='pokemon-namn'>{pokemon.name} </h3>
      <Link  to='/pokemon-detail'className='pokemon-link' ><button className='btn fa-solid fa-circle-info'> I n f o</button> </Link>
    </Card>
  );
};

export default Pokemon;
