import React from 'react'
import CocktailList from '../components/CocktailList'
import FilterSearch from '../components/FilterSearch'
import DropdownList from '../components/FilterSearch'


export default function Home() {
   
  return (
    <main>
      <FilterSearch />
      <CocktailList />
    </main>
  )
}
  
  