import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Routes, Navigate } from 'react-router-dom';
// react-router-dom v6 docs
// https://reactrouter.com/docs/en/v6/getting-started/overview
import Nav from './Nav';
import DogList from './DogList';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> {/* replaces <Switch> in v6*/ }
          <Route exact={"true"} path="/dogs" element={
              <>
              <Nav dogs={props.dogs}/>
              {/* <DogList /> */}
              </>
          }/>
          <Route path="/" element={<Navigate replace to="/dogs" />} />
          <Route path="*" element={<Navigate replace to="/dogs" />} />
          {/*
            When no other route matches the URL, you can render a "not found"
            route using path="*". This route will match any URL, but
            will have the weakest precedence so the router will only pick it
            if no other routes match.
          */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: './dogpics/whiskey',
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: './dogpics/duke',
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: './dogpics/perry',
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: './dogpics/tubby',
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
