//import React from 'react'
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

export default function DropdownList() {

  const optionsCategory = ['Shot', 'Beer', 'Cocktail', 'Punch'];
  const optionsGlass = ['Shot', 'Pint', 'Collins', 'Highball', 'Punch bowl', 'Whiskey sour Glass', 'Wine', 'Margarita', 'Pitcher'];
  const optionsType = ['Alcoholic', 'Optional Alcohol'];
  const optionsIngredient = ['Guinness', 'Rum', 'Vodka', 'Campari', 'Bourbon', 'Soda Water', 'Sherry', 'Tequila', 'Dark Rum'];
  
  const [selectedIngredient, setSelectedIngredient] = useState(optionsIngredient[0]);
  const [selectedCategory, setSelectedCategory] = useState(optionsCategory[0]);
  const [selectedGlass, setSelectedGlass] = useState(optionsGlass[0]);
  const [selectedType, setSelectedType] = useState(optionsType[0]);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const { setSearchTerm } = useGlobalContext()
  const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 1;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `border-bottom: 2px solid black;
    opacity: 1;`
  }
  `;
  function searchCocktail(option) {
    setSearchTerm(option)
  }

  const changeDropdown = () => {
    setIsOpen(!isOpen);
  };
  const changeDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const changeDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };
  const changeDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };
  const ingredientClick = (option) => {
    setSelectedIngredient(option);
    setIsOpen(false);
    searchCocktail(selectedIngredient);
  };
  const categoryClick = (option) => {
    setSelectedCategory(option);
    setIsOpen2(false);
    searchCocktail(selectedCategory);
  };
  const glassClick = (option) => {
    setSelectedGlass(option);
    setIsOpen3(false);
    searchCocktail(selectedGlass);
  };
  const typeClick = (option) => {
    setSelectedType(option);
    setIsOpen4(false);
    searchCocktail(selectedType);
  };
  
  return (
    <>
      <section className="section cocktail-section">
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <div className="search-filter">
          <div className="search-box">
            <h2 align='center'>Choose the category</h2>
            <Tab className="dropdown">
              <div className={`dropdown-change ${isOpen ? 'open' : ''}`} onClick={changeDropdown}>
                Ingredient
                <i className="arrow"></i>
              </div>
              <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                {optionsIngredient.map((option, index) => (
                  <li key={index} onClick={() => ingredientClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            </Tab>
            <Tab className="dropdown">
              <div className={`dropdown-change ${isOpen2 ? 'open' : ''}`} onClick={changeDropdown2}>
                Category
                <i className="arrow"></i>
              </div>
              <ul className={`dropdown-menu ${isOpen2 ? 'show' : ''}`}>
                {optionsCategory.map((option, index) => (
                  <li key={index} onClick={() => categoryClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            </Tab>
            <Tab className="dropdown">
              <div className={`dropdown-change ${isOpen3 ? 'open' : ''}`} onClick={changeDropdown3}>
                Glass
                <i className="arrow"></i>
              </div>
              <ul className={`dropdown-menu ${isOpen3 ? 'show' : ''}`}>
                {optionsGlass.map((option, index) => (
                  <li key={index} onClick={() => glassClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            </Tab>
            <Tab className="dropdown">
              <div className={`dropdown-change ${isOpen4 ? 'open' : ''}`} onClick={changeDropdown4}>
                Type
                <i className="arrow"></i>
              </div>
              <ul className={`dropdown-menu ${isOpen4 ? 'show' : ''}`}>
                {optionsType.map((option, index) => (
                  <li key={index} onClick={() => typeClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            </Tab>
          </div>
        </div>
      </section>
    </>
  );
}

