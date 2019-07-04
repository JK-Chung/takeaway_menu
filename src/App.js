import React from 'react';
import './App.css';

import { Header } from "./Components/Layout";
import FoodItem from "./Components/FoodItem";

function App() {
  return (
    <React.Fragment>
      <Header />
      <FoodItem foodName={"Chicken Curry"}/>
    </React.Fragment>
  );
}

export default App;
