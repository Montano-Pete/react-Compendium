import { useEffect, useState } from 'react';
import { fetchPokemonAPI } from '../../services/FetchPokemonAPI';

export default function Compendium() {
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

  return <div></div>;
}
