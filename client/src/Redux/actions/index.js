import axios from 'axios';

export  function getRecipes (){
    return async function (dispatch){
        let json = await axios.get("/api/recipes");
        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data
        })
    }
}
export function cleaner() {
    return {
        type: 'CLEANER'
    }
}

export function deleteRecipe (id){
    return async function(dispatch){
        try{
            let json = await axios.delete("/api/delete/" + id);
            return json;
        } catch (error) { 
            console.log(error)
        }}}
    

export function getDetail (id){
    return async function (dispatch){
      try{
        let json = await axios.get("/api/recipes/" + id);
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
        let json = await axios.get("/api/diets");
        return dispatch({
            type: 'GET_DIET_TYPES',
            payload: json.data
        })
    }
}
export function postRecipe (payload){
    return async function (dispatch){
        let json = await axios.post("/api/recipes",payload);
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
            let json = await axios.get ("/api/recipes?name=" + name)
            return dispatch({
                type: 'GET_RECIPE_NAME',
                payload: json.data 

            })
        }catch (error){
            console.log(error)
        }
    }
}