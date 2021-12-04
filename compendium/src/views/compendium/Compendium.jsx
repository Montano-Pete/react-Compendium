import { useEffect, useState } from 'react';
import PokemonList from '../../components/PokemonList';
import fetchPokemonAPI from '../../services/FetchPokemonAPI';

function Compendium() {
  const [loading, setLoading] = useState(true);
  const [pokemonState, setPokemonState] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const fetchedPokemon = await fetchPokemonAPI();
      setPokemonState(fetchedPokemon);
      setLoading(false);
    }

    getPokemon();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <PokemonList pokemonState={pokemonState} />
    </>
  );
}

export default Compendium;
