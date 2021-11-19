import React from "react";

import { useParams, BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

const DogDetails = ({dogs}) => {
  const { name } = useParams();
  const currDog = {};
  // possibly useState to get dog b4 you render the component
  console.log(name, dogs)
  for (const dog of dogs) {
    console.log(dog.name)
    if (name === dog.name) {
      Object.assign(currDog, dog)
      break;
    }
  }
  console.log(currDog.facts)
  return (
    <div>
      <h2>Name: {currDog.name}</h2>
      <img src={currDog.src} alt="a dog pic" />
      {/* won't display pic */}
      <ul>
      {currDog.facts.map((fact, ind) => {
        return (
          <li key={ind}>{fact}</li>
        )
      })}
      </ul>
    </div>
  )
}

export default DogDetails;
