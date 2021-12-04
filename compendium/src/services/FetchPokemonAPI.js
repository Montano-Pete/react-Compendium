const fetchPokemonAPI = async () => {
  const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/');
  const apiData = await res.json();
  console.log('results', apiData);

  return apiData.results.map((pokemon) => ({
    name: pokemon.pokemon,
    image: pokemon.url_image,
    typeOne: pokemon.type_1,
    typeTwo: pokemon.type_2,
    attack: pokemon.attack,
    defense: pokemon.defense,
    pokedex: pokemon.pokedex,
  }));
};

export default fetchPokemonAPI;
