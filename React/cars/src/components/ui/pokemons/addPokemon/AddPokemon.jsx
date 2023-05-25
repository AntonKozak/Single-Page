const AddPokemon = ({addPokemon, pokemons}) => {
  return (
    <>
      <h1>Addpokemon</h1>
      <form onSubmit={addPokemon}>
        <input type='text' name='pokemonname' placeholder='Pokemon name'/>
        <input type="text" name='imageadress' placeholder='Image adress'/>
        <button>Add Pokemon</button>
      </form>
      <h3>Image adress copy to Image adress</h3>
      <p> https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{`${ 1+pokemons.length}`}.png</p>
    </>
  );
};

export default AddPokemon;
