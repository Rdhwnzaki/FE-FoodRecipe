/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { addRecipeData } from "../redux/actions/add-recipe";

function addRecipe() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [photo, setPhoto] = useState("");
  const [video, setVideo] = useState("");

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(ingredients);
    console.log(photo);
    console.log(video);
    let data = {
      title,
      ingredients,
      photo,
      video,
    };
    dispatch(addRecipeData(data));
  };
  return (
    <div>
      <div className="container">
        {/* <div className="btn bg-light mb-5 mt-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="" style={{ width: "1240px" }}>
                <h6>Image</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="" style={{ width: "1240px" }}>
                <Image src="/image.png" width={50} height={50} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="" style={{ width: "1240px" }}>
                <h6>Add Photo</h6>
              </div>
            </div>
          </div>
        </div> */}

        <form onSubmit={postData}>
          <div className="bg-light">
            <div className="row text-start mt-5">
              <div className="col-lg-12">
                <input
                  type="file"
                  id="photo"
                  onChange={handlePhoto}
                  name="photo"
                  placeholder="photo"
                  className="form-control bg-light"
                />
              </div>
            </div>
          </div>

          <div className="bg-light">
            <div className="row text-start mt-3">
              <div className="col-lg-12">
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  name="title"
                  placeholder="Title"
                  className="form-control bg-light"
                />
              </div>
            </div>
          </div>
          <div className="bg-light mt-3">
            <div className="row text-start">
              <div className="col-lg-12">
                <textarea
                  class="form-control bg-light"
                  id="exampleFormControlTextarea1"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  name="ingredients"
                  rows="9"
                  placeholder="Ingredients"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="bg-light mt-3">
            <div className="row text-start">
              <div className="col-lg-12">
                <input
                  type="text"
                  id="video"
                  value={video}
                  onChange={(e) => setVideo(e.target.value)}
                  name="video"
                  placeholder=" Video "
                  className="form-control bg-light"
                />
              </div>
            </div>
          </div>
          <div className="mt-3 mb-5">
            <div className="row text-start">
              <div className="col-lg-3">
                <button
                  className="btn"
                  type="submit"
                  style={{
                    backgroundColor: "#EFC81A",
                    color: "white",
                    width: "300px",
                    marginLeft: "500px",
                  }}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default addRecipe;
