import React from "react";

import { StyledHomePaginated } from './Styles/StyledHome';

export default function Paginated ({recipesPerPage, allRecipes, paginated}){
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allRecipes/recipesPerPage); i++) {
        pageNumbers.push(i)
    } 
    
    return(
        <nav>
            <StyledHomePaginated>
            <span>page:</span>
                {pageNumbers&& 
                pageNumbers.map(number=>{ 
                    return (
                    <li className="number" key={number}>
                    <button onClick={()=> paginated(number)}>{number}</button>
                    </li>   
                    ) 
                })}
            </StyledHomePaginated>
        </nav>
    )
}
///added the return in warning