export const fetchPokemonAPI = async () => {
  const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/');
  const apiData = await res.json();
  console.log('results', apiData);

  return apiData.results;
};
