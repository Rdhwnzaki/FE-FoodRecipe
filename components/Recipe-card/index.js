/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";
import Router from "next/router";

export const Recipe = ({ recipe, loading, token }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {recipe.map((item) => {
        return (
          <div
            className="container text-warning shadow my-4"
            style={{ backgroundColor: "#f5f5f5" }}
            key={item.id_recipe}
          >
            <div onClick={() => Router.push(`/recipe/${item.id_recipe}`)}>
              <div className="row align-items-center">
                <div className="col-3">
                  <img
                    src={item.photo}
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <div className="col-3" style={{ marginTop: "40px" }}>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          </div>
          // </div>
        );
      })}
    </div>
  );
};

export default Recipe;
