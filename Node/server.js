const express = require('express');
const cors = require('cors');
const axios = require('axios');


const app = express();
app.use(cors());
app.use(express.json());

class Pokemons {
  constructor(id, name, image) {
    this.id = id;
    this.name = name;
    this.image = image;
  }
}

// GET Method POKEMONS API
// app.get('/v1/pokemons', async (req, res) => {
//   const url = 'https://pokeapi.co/api/v2/pokemon';
//   const allPokemons = [];

//   for (let i = 1; i <= 8; i++) {
//     const { data } = await axios.get(`${url}/${i}`);

//     const pokemon = new Pokemons(
//       data.id,
//       data.name,
//       data.sprites.front_default
//     );
//     allPokemons.push(pokemon);
//   }
//   res.status(200).json(allPokemons);
// });

// GET Method LOCALHOST
//ALL
app.get('/v1/pokemons', async (req, res) => {
  const url = 'http://localhost:3000/pokemons';
  
  const { data } = await axios.get(url);
  
  console.log(data);
  res.status(200).json(data);
});

//ById
app.get('/v1/pokemons/:id', async (req, res) => {
  const param = req.params.id;
  const url = `http://localhost:3000/pokemons/${param}`;
  const { data } = await axios.get(url);
  console.log(data);
  res.status(200).json(data);
});

// POST Method
app.post('/v1/pokemons', async (req, res) => {
  const url = 'http://localhost:3000/pokemons';

  const body = req.body;
  const { data } = await axios.post(url, body);
  // console.log(body);
  res.status(201).json(data);
});

//Start
const PORT = 5020;

app.listen(PORT, () => console.log(`Server port ${PORT}`));
