const initialState = {
  recipe: {
    title: "",
    ingredients: "",
    photo: "",
    video: "",
  },
  isLoading: false,
};

const RecipeReducers = (state = initialState, action) => {
  if (action.type === "ADD_RECIPE_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "ADD_RECIPE_SUCCESS") {
    return {
      ...state,
      recipe: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};
export default RecipeReducers;
