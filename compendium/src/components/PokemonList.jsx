// import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

const PokemonList = ({ pokemonState }) => (
  <ul aria-label="pokemon">
    {pokemonState.map((pokemon) => (
      <li key={`${pokemon.name}`}>
        <Pokemon
          name={pokemon.name}
          image={pokemon.image}
          typeOne={pokemon.typeOne}
          typeTwo={pokemon.typeTwo}
          attack={pokemon.attack}
          defense={pokemon.defense}
          pokedex={pokemon.pokedex}
        />
      </li>
    ))}
  </ul>
);

export default PokemonList;
