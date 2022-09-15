import classNames from 'classnames';
import { useEffect, useState } from 'react';

import { getColorByName, getGradientColorOneByName, getGradientColorTwoByName } from '../../util/colors';
import './CardDetails.css';

const Card = ({ pokemon }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (pokemon?.sprites?.front_default) {
      setImage(pokemon.sprites.front_default)
    }
  }, [])

  const getCardStyle = (pokemon) => {
    return {
      color: getColorByName(pokemon?.color?.name),
      background: `linear-gradient(${getGradientColorOneByName(pokemon?.color?.name)}, ${getGradientColorTwoByName(pokemon?.color?.name)})`
    }
  }

  const getHeightCentimeter = (height) => {
    if (!isNaN(height)) {
      return height * 10;
    }
    return 0;
  }

  const getWeightKilogram = (weight) => {
    if (!isNaN(weight)) {
      return weight * 10;
    }
    return 0;
  }

  const getAbilitiesNames = (abilities) => {
    if (abilities?.length > 0) {
      return abilities.map(({ ability }) => ability.name).join(", ") + ".";
    }
    return "Nenhuma habilidade.";
  }

  const getTypesNames = (types) => {
    if (types?.length > 0) {
      return types.map(({ type }) => type.name).join(", ") + ".";
    }
    return "Nenhum tipo.";
  }

  return (
    <div className="center">
      <div className="card">
        <div className="pokemon-card" style={getCardStyle(pokemon)}>
          <div className="level">
            {image && <img src={image} className="image" alt="Avatar" />}
            <div className='images-list'>
              <img src={pokemon.sprites.front_default} onClick={() => setImage(pokemon.sprites.front_default)} className="image-list" alt="Avatar" />
              <img src={pokemon.sprites.back_default} onClick={() => setImage(pokemon.sprites.back_default)} className="image-list" alt="Avatar" />
            </div>
          </div>
          <div className="points">
            Base Experience {pokemon?.base_experience}
          </div>
        </div>
        <div className="more-info">
          <h1>{pokemon?.name}</h1>
          <div className='pokemon-info'>
            <div className="pokemon-info-left">
              <span>Height</span>
              <span>Weight</span>
              <span>Abilities</span>
              <span>Types</span>
            </div>
            <div className="pokemon-info-right">
              <span>{getHeightCentimeter(pokemon?.height)}</span>
              <span>{getWeightKilogram(pokemon?.weight)}</span>
              <span>{getAbilitiesNames(pokemon?.abilities)}</span>
              <span>{getTypesNames(pokemon?.types)}</span>
            </div>
          </div>
          <div className="stats">
            <h3>Status base</h3>
            {pokemon?.stats.map(({ stat, base_stat }) => (<div className='pokemon-stats'>
              <span>{stat.name}</span>
              <div className="progress-light-grey">
                <div className={classNames({ 'progress-red': base_stat < 50, 'progress-green': base_stat >= 50 })} style={{ width: `${base_stat}%` }}></div>
              </div>
              <span>{base_stat}</span>
            </div>))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card;