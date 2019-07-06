import React from 'react';
import './App.css';

import { Header } from "./Components/Layout";
import FoodItem from "./Components/FoodItem";

import menuData from "./Resources/menu.json";

const generateUIComponentsFromMenuData = () => {
    return menuData
        .map(menuDatum => <FoodItem key={menuDatum.id} foodName={menuDatum.name}/>)
};

const App = () => {
    return (
        <React.Fragment>
          <Header />
          { generateUIComponentsFromMenuData() }
        </React.Fragment>
    );
};

export default App;
