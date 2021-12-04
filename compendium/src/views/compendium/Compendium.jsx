import { useEffect, useState } from 'react';
import PokemonList from '../../components/PokemonList';
import {
  fetchPokemonAPI,
  fetchPokemonApiTypes,
} from '../../services/FetchPokemonAPI';

function Compendium() {
  const [loading, setLoading] = useState(true);
  const [pokemonState, setPokemonState] = useState([]);
  const [typesState, setTypesState] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const fetchedPokemon = await fetchPokemonAPI();
      setPokemonState(fetchedPokemon);
      setLoading(false);
    }

    getPokemon();
  }, []);

  useEffect(() => {
    async function getTypes() {
      const fetchedTypes = await fetchPokemonApiTypes();
      setTypesState(fetchedTypes);
    }

    getTypes();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <PokemonList pokemon={pokemonState} />
    </>
  );
}

export default Compendium;
