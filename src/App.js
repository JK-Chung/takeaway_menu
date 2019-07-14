import React from 'react';
import './App.css';

import Header from "./Components/Layout/Header";
import FoodSection from "./Components/FoodSection";

import menuData from "./Resources/menu.json";

const mapMenuDataToUIComponents = () => {
    return menuData.map((menuSection, index) => (
        <FoodSection sectionName={menuSection.sectionName} foodData={menuSection.sectionFoods} key={index} />
        )
    )
};

const App = () => {
    return (
        <React.Fragment>
          <Header />
          { mapMenuDataToUIComponents() }
        </React.Fragment>
    );
};

export default App;
