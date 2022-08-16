import React from "react";
import { StyledHeader,Nav,Logo,StyledRecipeCreate,StyledA }  from './Styles/StyledHeader';
import { Cont }  from './Styles/StyledContainer';
import {Link} from 'react-router-dom';

import SearchBar from './SearchBar';
import GlobalStyles from "./Styles/Global";




export default function Header(){
    return(
        <Cont>
            <GlobalStyles/>
            <StyledHeader>
                <Nav>
                    <Logo src={require('./Styles/Image/IconFoods.png')} alt='Foods Logo'/>
                    <StyledRecipeCreate><Link to='/recipesform' style={{ textDecoration: 'none', color: 'white' }}><StyledA>Create recipes</StyledA></Link></StyledRecipeCreate>
                    
                </Nav>
            </StyledHeader>
        </Cont>
    )
}