import React, { useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {getDietTypes, postRecipe} from "../Redux/actions/index";
import {useDispatch, useSelector}from "react-redux";
import Header from './Header';

import { ButtonStyled }  from './Styles/StyledSearchBar';
import { WrapperForm, Styledform, FormGrid, Deletebutton, DietGrid, DietCard }  from './Styles/StyledForm';

// function validate(input){
//     let errors = {};
//     if(!input.name) {errors.name = "name field required"}
//     else if(!input.image) {errors.image = "image field required"}
//     else if(!input.dishType) {errors.dishType = "Dish type field required"}
//     else if(!input.shortDesc) {errors.shortDesc = "Short Description field required"}
//     else if(!input.healthScore) {errors.healthScore = "Healthscore field required"}
//     else if(!input.stepByStep) {errors.stepByStep = "Step by step field required"}
//     else if(!input.dietType) {errors.dietType = "Diet type field required"}
// }




export default function RecipeCreate(){
    const dispatch = useDispatch()
    const dietType = useSelector((state)=>state.DietTypes)
    const [errors, setErrors] = useState({})

    const [input,SetInput] = useState ({
        name: "",
        image: "",
        dishType: "",
        shortDesc: "",
        healthScore: "",
        stepByStep: "",

        dietType:[] 

    })

    function changeHandler(e){

        SetInput((prevData)=>{
            return{
              ...prevData,
            [e.target.name] : e.target.value   
            }
            
            
        })
        console.log(input)
        //setErrors(validate({
        //    ...input,
        //    [e.target.name] : e.target.value
        //}))
    }

    function selectHandler(e){
        SetInput({
            ...input,
            dietType: [...input.dietType,e.target.value]
        })
    }
    function submitHandler(e){
        e.preventDefault()
        console.log(input)
        dispatch(postRecipe(input))
        alert("Recipe Created Succesfully")
        SetInput({
            name: "",
            image: "",
            dishType: "",
            shortDesc: "",
            healthScore: "",
            stepByStep: "",

            dietType:[] 
        })
    }
    function deleteHandle(e){
        SetInput({
            ...input,
            dietType: input.dietName.filter(el=>el !== e)
        })
    }


    useEffect(()=>{
        dispatch(getDietTypes())
        
    },[dispatch]);
    ///warnerbros

    return(
        <div>
            <Header/>
            <WrapperForm>
                <ButtonStyled><Link to= '/Home' style={{ textDecoration: 'none', color: 'white'  }}>Go Back</Link></ButtonStyled>
                <h1>Create Your Own Recipe</h1>
                <Styledform onSubmit={(e)=>submitHandler(e)}>
                    <FormGrid>
                    <div>
                        <label>Name </label>
                        <input key="name"  type="text" value={input.name} name='name' onChange={(e)=>changeHandler(e)} />
                        {errors.name && (<p className="error">{errors.name}</p>)}
                    </div>
                    <div>
                        <label>Image </label>
                        <input key="image"  type="text" value={input.image} name='image' onChange={(e)=>changeHandler(e)} />
                        {errors.image && (<p className="error">{errors.image}</p>)}
                    </div>
                    <div>
                        <label>Dish type </label>
                        <input key="dishType"  type="text" value={input.dishType} name='dishType' onChange={(e)=>changeHandler(e)} />
                        {errors.dishType && (<p className="error">{errors.dishType}</p>)}
                    </div>
                    <div>
                        <label>Short Description </label>
                        <input key="ShortDesc"  type="text" value={input.shortDesc} name='shortDesc' onChange={(e)=>changeHandler(e)} />
                        {errors.shortDesc && (<p className="error">{errors.shortDesc}</p>)}
                    </div>
                    <div>
                        <label>HealthScore </label>
                        <input key="Healthscore"  type="number" value={input.healthScore} name='healthScore' onChange={(e)=>changeHandler(e)} />
                        {errors.healthScore && (<p className="error">{errors.healthScore}</p>)}
                    </div>
                    <div>
                        <label>Step by step</label> 
                        <input key="StepByStep"  type="text" value={input.stepByStep} name='stepByStep' onChange={(e)=>changeHandler(e)} />
                        {errors.stepByStep && (<p className="error">{errors.stepByStep}</p>)}
                    </div>
                    </FormGrid>
                    <label>Diet types </label> 
                    <select onChange={(e) => selectHandler(e)}>
                        {dietType.map((e)=>(
                            <option key={e.id} value={e.dietName}>{e.dietName}</option>
                        ))}
                    </select>
                      
                    <DietGrid>      
                        {input.dietType.map(e=>
                    <DietCard className='divDiet' key={e.id}>
                        <Deletebutton className="X"onClick={()=>deleteHandle(e)}>X</Deletebutton>
                        <p>{e}</p>
                    </DietCard>                  
                )}
                    </DietGrid>  
                    <ul><li>{input.dietType.map(e=>e+", ")}</li></ul>
                    <ButtonStyled type='submit'>Create Recipe</ButtonStyled>

                </Styledform>
                
            </WrapperForm>
        </div>    
    )





}

//dietName maybe
//impedir avance 
// VALIDAR EL HEALTHSCORE CON UN MAXIMO Y UN MINIMO 