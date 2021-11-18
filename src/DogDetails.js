import React from "react";

import { useParams, BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

const DogDetails = (dog) => {
  const { name } = useParams();
  // possibly useState to get dog b4 you render the component
  return (
    <>
    </>
  )
}

export default DogDetails;
