import { useNavigate } from "react-router-dom";

import { getColorByName, getGradientColorOneByName, getGradientColorTwoByName } from '../../util/colors';
import './CardList.css';

const CardList = ({ pokemon, index }) => {
  const navigate = useNavigate();

  const getCardStyle = (pokemon) => {
    return {
      color: getColorByName(pokemon?.color?.name),
      background: `linear-gradient(${getGradientColorOneByName(pokemon?.color?.name)}, ${getGradientColorTwoByName(pokemon?.color?.name)})`
    }
  }

  return (
    <div className="pokemon-card-list" style={getCardStyle(pokemon)} key={pokemon.name + index} onClick={() => navigate(`/pokemons/${pokemon.id}`)}>
      <div className="pokemon-card-list-info">
        {pokemon.name}
        <div>
          {pokemon?.types.map(({ type }, index) => (<div className='types' key={pokemon.name + index}>{type.name}</div>))}
        </div>
      </div>
      <img src={pokemon.sprites.other.home.front_default} alt="Pokemon imagem"></img>
    </div>
  )
}

export default CardList;