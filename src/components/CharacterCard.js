import React from "react";
// import Typography from "@material-ui/core/Typography"

export default function CharacterCard(props) {
  return(
    <span>
      <img top-width="100%" src={props.image} alt="Rick and Morty Character" />
        {/* <Typography variant = "title" color = "inherit" >{props.name}</Typography> */}
      <h2>{props.name}</h2>
      <h4>Origin: {props.origin}</h4>
      <h4>Species: {props.species}</h4>
      <h4>Status: {props.status}</h4>
    </span>
  )
}
