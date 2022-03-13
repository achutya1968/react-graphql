import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import {useParams} from "react-router-dom";
import "./Character.css"

function Character() {
const {id} = useParams()

  const { error, loading, data } = useCharacter(id);
  
if(loading) return <div>Loading...</div>

if(error) return <div>Something is wrong...</div>

  return (
    <div className="Character">
      <img src={data.character.image} alt="" height={550} width={550} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <h3>{data.character.gender}</h3>
      </div>
      <div className="Character-episode">
      {
        data.character.episode.map((ep)=>{
            return <div key={ep.id}>{ep.name}-<b>{ep.episode}</b></div>
        })       
      }
    </div>
    </div>
  );
}
export default Character;
