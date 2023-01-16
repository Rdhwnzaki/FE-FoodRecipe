/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import NavbarAfter from "../../components/NavbarAfter";
export async function getStaticPaths() {
  const res = await fetch(`${process.env.URL_BASE}/recipe`);
  const data = await res.json();

  const paths = data.data.map((recipe) => ({
    params: {
      id_recipe: `${recipe.id_recipe}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  try {
    const id_recipe = context.params.id_recipe;
    console.log(id_recipe);
    const res = await fetch(`${process.env.URL_BASE}/recipe/${id_recipe}`);
    const data = await res.json();
    console.log(data);
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
function detailVideoRecipe({ data }) {
  return (
    <div>
      <NavbarAfter />
      <div className="container">
        <div className="row mb-5">
          <div className="col-7">
            <video width={890} height={500} controls>
              <source src={data.data[0].video} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
            <h6 className="text-secondary">3 month ago</h6>
          </div>
          <div className="col-3 offset-2">
            <h4>Next</h4>
            <video width={290} height={200} controls>
              <source src={data.data[0].video} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
            <h6>{data.data[0].title}</h6>
            <p className="text-secondary">
              {data.data[0].fullname_user} - 3 month ago
            </p>
            <video width={290} height={200} controls>
              <source src={data.data[0].video} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
            <h6>{data.data[0].title}</h6>
            <p className="text-secondary">
              {data.data[0].fullname_user} - 3 month ago
            </p>
            <video width={290} height={200} controls>
              <source src={data.data[0].video} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
            <h6>{data.data[0].title}</h6>
            <p className="text-secondary">
              {data.data[0].fullname_user} - 3 month ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default detailVideoRecipe;
