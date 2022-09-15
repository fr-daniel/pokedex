import React, { useEffect, useState } from 'react';

import Pagination from '../../../components/Pagination';
import CardList from '../../../components/CardList';
import './List.css'
import usePokemons from '../../../hooks/usePokemons';

const PokemonsList = () => {
  const  { fetchPokemons, pokemons } = usePokemons(10);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true)
    fetchPokemons(1, () => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true)
    fetchPokemons(currentPage, () => setLoading(false));
  }, [currentPage])

  return (
    <div className="container">
      <div className="pokemon-container">
        <div>
          <h1 className="pokemon-title">Pokemon List</h1>
          {loading && (<div class="loader"></div>)}
          {!loading && (<div className="pokemon-list">
            {pokemons.length > 0 ? (
              pokemons.map((pokemon, index) => (
                <CardList pokemon={pokemon} index={index}/>
              ))
            ) : (
              <li className="list-feedback">
                Nenhum pokémon encontrado!
              </li>
            )}
          </div>)}
          <Pagination
            totalCount={900}
            pageSize={10}
            pageNeighbours={3}
            onPageChange={page => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
}

export default PokemonsList;

