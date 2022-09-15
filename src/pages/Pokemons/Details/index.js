import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CardDetails from '../../../components/CardDetails';
import usePokemon from '../../../hooks/usePokemon';

const PokemonsDetails = () => {
  let { pokemonId } = useParams();
  const { pokemon, fetchPokemon } = usePokemon();

  useEffect(() => {
    fetchPokemon(pokemonId);
  }, []);

  return (
    <div>
      {pokemon && (<CardDetails pokemon={pokemon}/>)}
    </div>
  );
}

export default PokemonsDetails;