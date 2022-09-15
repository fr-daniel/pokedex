import { useState } from "react";
import { get } from "../adapters/axios";

const usePokemons = (pageLimit) => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = (page, callback = () => {}) => {
    const offset = (page - 1) * pageLimit;
    
    get(`/pokemon?limit=${pageLimit}&offset=${offset}`).then(response => {
        const pokemonsWithId = response.data?.results?.map((pokemon, index) => ({ ...pokemon, id: offset + index + 1 }));
        fetchPokemonsWithDetails(pokemonsWithId, callback)
    });
  }

  const fetchPokemonsWithDetails = async (pokemonsWithId, callback) => {
    const pokemonsWithDetails = [];

    for (const pokemon of pokemonsWithId) {
      try {
        const pokemonsDetailResponse = await get(`/pokemon/${pokemon.id}`);
        const pokemonSpeciesResponse = await get(`/pokemon-species/${pokemon.id}`);
        pokemonsWithDetails.push({ ...pokemonsDetailResponse.data, ...pokemonSpeciesResponse.data });
      } catch (e) {
        throw Error('Erro ao buscar pokemon!')
      }
    }
    
    setPokemons(pokemonsWithDetails);
    callback();
  }


  return {fetchPokemons, pokemons};
}

export default usePokemons;