import React from 'react';
import './App.css';

import Header from "./Components/Layout/Header";
import FoodItem from "./Components/FoodItem";

import menuData from "./Resources/menu.json";
import FoodSection from "./Components/FoodSection";

const generateUIComponentsFromMenuData = () => {
    let i = 0;
    return menuData
        .map(menuDatum => <FoodItem key={i++} foodDatum={menuDatum}/>)
};

const App = () => {
    return (
        <React.Fragment>
          <Header />
          <FoodSection sectionName="Main Meals" menuData={menuData} />
        </React.Fragment>
    );
};

export default App;
