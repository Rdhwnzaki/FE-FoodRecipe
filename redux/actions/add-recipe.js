// import axios from "axios";
// import Router from "next/router";

// export const addRecipeData = (data) => async (dispatch) => {
//   try {
//     dispatch({ type: "ADD_RECIPE_PENDING" });
//     const { token } = context.req.cookies;
//     const user = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     const result = await axios.post(
//       `http://localhost:3000/recipe/add-recipe`,
//       data,
//       user,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );
//     const recipe = result.data.data;
//     console.log(recipe);
//     // localStorage.setItem("token", recipe.token);
//     dispatch({ type: "ADD_RECIPE_SUCCESS", payload: recipe });
//     Router.push("/profile");
//     console.log("Add Recipe Success");
//   } catch (err) {
//     console.log("Add Recipe Fail");
//     console.log(err);
//   }
// };
