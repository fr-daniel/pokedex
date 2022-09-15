import { useState } from "react";
import { get } from "../adapters/axios";

const usePokemon = () => {
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = (nameOrId) => {
    get(`/pokemon/${nameOrId}`).then(response => {
      const pokemon = response.data;
      get(`/pokemon-species/${nameOrId}`).then(response => {
        setPokemon({...pokemon, ...response.data})
      })
    })
  }

  return { fetchPokemon, pokemon };
}

export default usePokemon;