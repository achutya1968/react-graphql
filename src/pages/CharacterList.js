import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import {Link} from "react-router-dom"


const CharacterList = () => {
  const { error, loading, data } = useCharacters();
  
  if (loading) return <h2>Loading...</h2>;
  if (error) return <div>Something is wrong</div>;

  return (
    <div className="list">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} alt="" />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default CharacterList;
