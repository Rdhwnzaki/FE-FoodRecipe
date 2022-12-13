/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer";
import NavbarAfter from "../../components/NavbarAfter";

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/recipe`);
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
    const res = await fetch(`http://localhost:3000/recipe/${id_recipe}`);
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

function detailRecipe({ data }) {
  return (
    <div>
      <NavbarAfter />
      <div className="container">
        <div
          className="row justify-content-center mt-4"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-4">
            <h1>Loream Sandwich</h1>
          </div>
        </div>
        <div
          className="row justify-content-center mt-5"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-9">
            <img
              src={data.data[0].photo}
              style={{ width: "900px", height: "500px" }}
            />
          </div>
        </div>
        <div
          className="row justify-content-start mt-5"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-2">
            <h3>Ingredients</h3>
          </div>
        </div>
        <div
          className="row justify-content-start mt-3"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-2">
            <p>{data.data[0].ingredients}</p>
          </div>
        </div>
        <div
          className="row justify-content-start mt-3"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-2">
            <h3>Video Step</h3>
          </div>
        </div>
        <div
          className="row justify-content-start mt-3"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-2">
            <button
              className="btn btn-warning"
              style={{ width: "190px", height: "45px" }}
            >
              <Image src="/vid.png" height={10} width={10} />
            </button>
          </div>
        </div>
        <div
          className="row justify-content-start mt-3"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-2">
            <button
              className="btn btn-warning"
              style={{ width: "190px", height: "45px" }}
            >
              <Image src="/vid.png" height={10} width={10} />
            </button>
          </div>
        </div>
        <div
          className="row justify-content-start mt-3"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-2">
            <button
              className="btn btn-warning"
              style={{ width: "190px", height: "45px" }}
            >
              <Image src="/vid.png" height={10} width={10} />
            </button>
          </div>
        </div>
        <div
          className="row justify-content-start mt-3"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-2">
            <button
              className="btn btn-warning"
              style={{ width: "190px", height: "45px" }}
            >
              <Image src="/vid.png" height={10} width={10} />
            </button>
          </div>
        </div>
        <div
          className="row justify-content-start mt-5"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-12">
            <textarea
              class="form-control bg-light"
              id="exampleFormControlTextarea1"
              rows="9"
              placeholder="Comment :"
            ></textarea>
          </div>
        </div>
        <div
          className="row justify-content-center  mt-3"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-3">
            <button
              className="btn btn-warning text-white"
              style={{ width: "250px", height: "35px" }}
            >
              <h6>Send</h6>
            </button>
          </div>
        </div>
        <div
          className="row justify-content-start mt-3"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-2">
            <h3>Comment</h3>
          </div>
        </div>
        <div
          className="row justify-content-start mt-3"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-1">
            <Image
              src="/photo.png"
              width={50}
              height={50}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="col-5">
            <h6>Ayudia</h6>
            <p>Nice recipe. simple and delicious, thankyou</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default detailRecipe;
