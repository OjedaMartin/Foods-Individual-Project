import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes,filterRecipesByDiet, Ordering } from '../Redux/actions';
import {Link} from 'react-router-dom';
import Paginated from './Paginated';
import Card from './Card';
import Header from './Header';
import SearchBar from './SearchBar';

import {  StyledHomeOptions, StyledHomeSection, 
    StyledHomeCardCont, StyledHomeSelector, } from './Styles/StyledHome';
import { Wrapper } from './Styles/StyledWrapper';


export default function Home(){

    const dispatch = useDispatch()
    const allRecipes = useSelector ((state)=> state.recipes)
   // const allDiets = useSelector ((state)=> state.DietTypes)
    const [order, setOrder] = useState('')
    const [currentPage, setCurentPage] = useState(1)
    const [recipesPerPage, setRecipesPerPage]= useState(9)
    const indexOfLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe,indexOfLastRecipe)

    const paginated = (pageNumber) => {
        setCurentPage(pageNumber)
    }



useEffect (()=>{
    dispatch(getRecipes());

},[dispatch])
//>>>????



function handleFilterStatus(e){
    //e.preventDefault()
    setCurentPage(1)
    dispatch(filterRecipesByDiet(e.target.value))
}
function handleSort(e){
    e.preventDefault()
    dispatch(Ordering(e.target.value))
    setCurentPage(1)
    setOrder(`ordering ${e.target.value}`)
}

return (
    <div>
        <Header/>
        <Wrapper>
        <SearchBar/>
        <StyledHomeOptions>
            <span>Sort By: </span>
            <StyledHomeSelector onChange={e=>handleSort(e)}> Sort By:
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
                <option value="ascHS">By Higher HealthScore</option>
                <option value="descHS">By Lower HealthScore</option>
            </StyledHomeSelector>
            <span>Diet Filter: </span>
            <StyledHomeSelector onChange={e=> handleFilterStatus(e)}>
                <option value="all">All</option>
                <option value="dairy free">Dairy Free</option>
                <option value="gluten free">Gluten Free</option>
                <option value="ketogenic">Ketogenic</option>                
                <option value="lacto ovo vegetarian">Lacto-ovo-vegetarian</option>                
                <option value="vegan">Vegan</option>
                <option value="pescatarian">Pescetarian</option>
                <option value="primal">Primal</option>
                <option value="fodmap friendly">Fodmap Friendly</option>
                <option value="paleolithic">Paleo</option>
                <option value="whole 30">Whole 30</option>
            </StyledHomeSelector>
            <Paginated
            recipesPerPage = {recipesPerPage}
            allRecipes = {allRecipes.length}
            paginated = {paginated}
            />
        </StyledHomeOptions>
        <StyledHomeSection>
            {currentRecipes?.map((e)=> {
                 return (
                     <StyledHomeCardCont>
                         <Link to={"/recipes/" + e.id} id={e.id} style={{ textDecoration: 'none', color: 'black'  }}>
                             <Card name={e.name} image={e.image} dietName={e.createdInDb? e.DietTypes.map(e=>e.dietName).toString() : e.dietName.toString()} key={e.id}/>
                         </Link>
                     </StyledHomeCardCont>
                 )})}
        </StyledHomeSection>
        <StyledHomeOptions>
            
            <Paginated
            recipesPerPage = {recipesPerPage}
            allRecipes = {allRecipes.length}
            paginated = {paginated}
            />
        </StyledHomeOptions>
        </Wrapper>
    </div>
)


}

            

