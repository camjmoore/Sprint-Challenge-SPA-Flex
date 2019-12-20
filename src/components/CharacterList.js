import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters ] = useState([]);
  const [filteredCharacters, setFilteredCharacters ] = useState([]);
  
  const search = (input) => {
    if (!input){              //if the input is falsey show all characters
      setFilteredCharacters(characters)
    } else {
      const filteredArr = characters.filter(char => {
        return char["name"].toLowerCase().search(input.toLowerCase()) > -1 //return characters with values greater than falsey
      })

      setFilteredCharacters(filteredArr)
    }
  }


  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          console.log(res.data.results)
          setCharacters(res.data.results);
          // setFilteredCharacters(res.data.results);
        })
        .catch(error => {
          console.log('results not found', error)
        });
    }

    getCharacters();
  }, []);

  return (
    <section className="character-list">
      
      <SearchForm search = {search}/>

      {filteredCharacters.map(character => (
        <CharacterCard 
          key = {character.id}
          image = {character.image}
          name = {character.name}
          origin = {character.origin.name}
          species = {character.species}
          status = {character.status}
        />
      ))}
    </section>
  );
}
