import React from "react";
import {Link, useParams } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { getDetail } from "../Redux/actions/index";
import { useEffect } from "react";
import Header from './Header';

import { WrapperDet, Detnav, Detimg } from './Styles/StyledDetail';
import { ButtonStyled }  from './Styles/StyledSearchBar';


export default function Detail () {
    
    const {id} = useParams()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getDetail(id))

        return()=>{
            
        }

    },[dispatch])

    const myRecipe = useSelector((state)=>state.detail)

    function summaryCreator(){
        return {__html: myRecipe[0].shortDesc}
    }
console.log(myRecipe)   
return(
    <div>
        <Header/>
        <WrapperDet>
             <ButtonStyled><Link to='/Home' style={{ textDecoration: 'none', color: 'white'  }}>Back to home </Link></ButtonStyled>
            {
                myRecipe.length>0?
                <div>
                    <h1>{myRecipe[0].name}</h1>
                    <Detimg src={ myRecipe[0].image} alt='Recipe Image'  />
                    <h3>Dish type: {myRecipe[0].createdInDb? myRecipe[0].dishType: myRecipe[0].dishType.map(e=>e + (', '))}</h3>
                    <Detnav>
                        <h3>Health Score: {myRecipe[0].healthScore}</h3>
                        
                        <h3>Diet type: {myRecipe[0].createdInDb? myRecipe[0].DietTypes.map(e=> e.dietName +(', ')) : myRecipe[0].dietName.map(e=>e + (', '))}</h3>
                    </Detnav>
                    
                    <p dangerouslySetInnerHTML={summaryCreator()}></p>
                    

                    <h3>Directions </h3>
                
                    {
                    myRecipe[0].createdInDb?<h2>{myRecipe[0].stepByStep}</h2>:

                    myRecipe[0].stepByStep[0] !== undefined?
                    
                        

                            myRecipe[0].stepByStep[0].steps.map((e)=>{  
                            return (
                                <ul>
                                    <li> {"Step " + e.number + ": " + e.step} </li>
                                </ul>
                            )                     
                            })
                    : <p>Directions for this recipe are no available right now, Sorry for the inconvenience</p>
                    }


                    
                </div> : <p>loading...</p>

            }
            <ButtonStyled><Link to='/Home' style={{ textDecoration: 'none', color: 'white'  }}>Back to home </Link></ButtonStyled>
        </WrapperDet>
    </div>
)

}