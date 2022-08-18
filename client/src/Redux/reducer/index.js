const initialState = {
recipes: [],
allRecipes: [],
DietTypes: [],
detail: [],
};

function rootReducer(state = initialState, action) {
switch (action.type) {
    case "GET_RECIPES":
    return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
    };
    case "GET_DIET_TYPES":
    return {
        ...state,
        DietTypes: action.payload,
    };
    case "GET_DETAIL":
    return {
        ...state,
        detail: action.payload,
    };
    case "POST_RECIPE":
    return {
        ...state,
    };
    case "CLEANER":
    return {
        ...state,
        detail: [],
    };
    case "GET_RECIPE_NAME":
    return {
        ...state,
        recipes: action.payload,
        //allRecipes : action.payload
    };
    case "FILTER_BY_VALUE":
    const allRecipes = state.allRecipes;
    const dietFilter =
        action.payload === "all"
        ? allRecipes
        : allRecipes.filter((e) => e.dietName.includes(action.payload));
    return {
        ...state,
        recipes: dietFilter,
    };

    case "ORDERING":
    let sortedArr = action.payload;
    if (sortedArr === "asc") {
        state.recipes.sort(function (a, b) {
        if (a.name > b.name) return 1;
        if (b.name > a.name) return -1;
        return 0;
        });
    }
    if (sortedArr === "desc") {
        state.recipes.sort(function (a, b) {
        if (a.name > b.name) return -1;
        if (b.name > a.name) return 1;
        return 0;
        });
    }
    if (sortedArr === "ascHS") {
        state.recipes.sort(function (a, b) {
        if (a.healthScore > b.healthScore) return -1;
        if (b.healthScore > a.healthScore) return 1;
        return 0;
        });
    }
    if (sortedArr === "descHS") {
        state.recipes.sort(function (a, b) {
        if (a.healthScore > b.healthScore) return 1;
        if (b.healthScore > a.healthScore) return -1;
        return 0;
        });
    }

      //quisa preguntar + por el acction
    return {
        ...state,
        recipes: state.recipes,
    };

    default:
    return state;
}
}
export default rootReducer;
