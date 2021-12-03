export const fetchStarWarsAPI = async () => {
  const res = await fetch('https://swapi.dev/api/people/');
  const characterData = await res.json();
  console.log('results', characterData);

  return characterData.results;
};
