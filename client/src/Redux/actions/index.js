import axios from 'axios';

export  function getRecipes (){
    return async function (dispatch){
        let json = await axios.get("http://localhost:3001/recipes");
        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data
        })
    }
}

export function deleteRecipe (id){
    return async function(dispatch){
        try{
            let json = await axios.delete("http://localhost:3001/delete/" + id);
            return json;
        } catch (error) { 
            console.log(error)
        }}}
    

export function getDetail (id){
    return async function (dispatch){
      try{
        let json = await axios.get("http://localhost:3001/recipes/" + id);
        return dispatch({
            type: 'GET_DETAIL',
            payload: json.data
        })
     } catch (error) { 
         console.log(error)
     }
    }
}
export function getDietTypes (){
    return async function (dispatch){
        let json = await axios.get("http://localhost:3001/diets");
        return dispatch({
            type: 'GET_DIET_TYPES',
            payload: json.data
        })
    }
}
export function postRecipe (payload){
    return async function (dispatch){
        let json = await axios.post("http://localhost:3001/recipes",payload);
        return json;
    }
}
export function filterRecipesByDiet(payload){
    return{
        type: 'FILTER_BY_VALUE',
        payload
    }
}
export function Ordering(payload){
    return{
        type: 'ORDERING',
        payload
    }
}
export function getRecipeName(name){
    return async function (dispatch){
        try{
            let json = await axios.get ("http://localhost:3001/recipes?name=" + name)
            return dispatch({
                type: 'GET_RECIPE_NAME',
                payload: json.data 

            })
        }catch (error){
            console.log(error)
        }
    }
}