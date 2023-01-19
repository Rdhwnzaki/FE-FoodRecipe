/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import ModalEdit from "../components/Modal";
import axios from "axios";
import NavbarAfter from "../components/NavbarAfter";
import Footer from "../components/Footer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { RiEditBoxLine } from "react-icons/ri";
import { BsFillBucketFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export const getServerSideProps = async (context) => {
  const { token } = context.req.cookies;
  console.log(token);
  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: true,
      },
    };
  }

  return {
    props: {
      isLogin: true,
      token: token,
    },
  };
};

function profile({ token }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(null);
  const [key, setKey] = useState("myrecipe");
  const router = useRouter();
  useEffect(() => {
    axios
      .get(`${process.env.URL_BASE}/users`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("get data success");
        console.log(res.data);
        res.data && setData(res.data.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
  const [recipe, setRecipe] = useState(null);
  const [save, setSave] = useState(null);
  const [like, setLike] = useState(null);
  // const [id_liked, setIdLiked] = useState(null);
  // const [id_saved, setIdSaved] = useState(null);
  const myrecipe = `${process.env.URL_BASE}/recipe/recipe-user`;
  useEffect(() => {
    axios
      .get(myrecipe, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("get data success");
        console.log(res.data);
        res.data && setRecipe(res.data.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
  const saved = `${process.env.URL_BASE}/recipe/saved-recipe/get-saved`;
  useEffect(() => {
    axios
      .get(saved, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("get data success");
        console.log(res.data);
        res.data && setSave(res.data.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
  const liked = `${process.env.URL_BASE}/recipe/like-recipe/get-like`;
  useEffect(() => {
    axios
      .get(liked, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("get data success");
        console.log(res.data);
        res.data && setLike(res.data.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
  const DeleteSave = (id_saved) => {
    axios
      .delete(
        `${process.env.URL_BASE}/recipe/saved-recipe/delete/${id_saved}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log("Delete save recipe success");
        console.log(res);
        Swal.fire("Success", "Delete save recipe success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Delete save recipe fail");
        console.log(err);
        Swal.fire("Warning", "Delete save recipe fail", "error");
      });
  };
  const DeleteLike = (id_liked) => {
    axios
      .delete(`${process.env.URL_BASE}/recipe/like-recipe/delete/${id_liked}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Delete like recipe success");
        console.log(res);
        Swal.fire("Success", "Delete like recipe success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Delete save recipe fail");
        console.log(err);
        Swal.fire("Warning", "Delete save recipe fail", "error");
      });
  };
  const DeleteRecipe = (id_recipe) => {
    axios
      .delete(`${process.env.URL_BASE}/recipe/delete-recipe/${id_recipe}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Delete recipe success");
        console.log(res);
        Swal.fire("Success", "Delete recipe success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Delete recipe fail");
        console.log(err);
        Swal.fire("Warning", "Delete recipe fail", "error");
      });
  };
  return (
    <div>
      <NavbarAfter />
      <div className="container">
        <div>
          <div className="row justify-content-center mt-5">
            <div className="col-1">
              <img
                src={data ? data[0].photo : "data not found"}
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                className="avatar-profile"
                alt=""
              />
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-1">
              <ModalEdit token={token} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-6"
              style={{ marginLeft: "570px", marginTop: "-50px" }}
            >
              <h4> {data ? data[0].fullname_user : "data not found"}</h4>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="container text-start  rounded-2 mt-1 bg-white">
            <div className="row  rounded-3">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="myrecipe" title="My Recipe">
                  <div className="row">
                    {recipe ? (
                      recipe.map((item) => (
                        <div
                          className="col-3"
                          key={item.id_recipe}
                        >
                          <img
                            src={item.photo}
                            alt=""
                            style={{ height: "300px", width: "300px" }}
                            onClick={() =>
                              router.push(`/recipe/${item.id_recipe}`)
                            }
                          />
                          <h4
                            style={{
                              marginTop: "-40px",
                              marginLeft: "13px",
                              color: "white",
                            }}
                          >
                            {item.title}
                          </h4>
                          <div className="mt-4">
                            <button
                              className="btn btn-warning text-white"
                              style={{
                                marginRight: "20px",
                                marginLeft: "190px",
                                marginTop: "-100px",
                              }}
                              key={item.id_recipe}
                              onClick={() =>
                                router.push(`/update-recipe/${item.id_recipe}`)
                              }
                            >
                              <RiEditBoxLine />
                            </button>
                            <button
                              key={item.id_recipe}
                              onClick={() => DeleteRecipe(item.id_recipe)}
                              className="btn btn-danger text-white"
                              style={{marginTop: "-100px",}}
                            >
                              <BsFillBucketFill />
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <h1>...Loading</h1>
                    )}
                  </div>
                </Tab>
                <Tab eventKey="savedrecipe" title="Saved Recipe">
                  <div className="row">
                    {save ? (
                      save.map((item) => (
                        <div
                          className="col-3"
                          key={item.recipe_id}
                          onClick={() =>
                            router.push(`/recipe/${item.recipe_id}`)
                          }
                        >
                          <img
                            src={item.photo}
                            alt=""
                            style={{ height: "300px", width: "300px" }}
                          />
                          <h4
                            style={{
                              marginTop: "-40px",
                              marginLeft: "13px",
                              color: "white",
                            }}
                          >
                            {item.title}
                          </h4>
                          <div className="mt-4">
                            <button
                              key={item.id_saved}
                              onClick={() => DeleteSave(item.id_saved)}
                              className="btn btn-danger text-white"
                              style={{marginLeft: "250px",marginTop: "-100px",}}
                            >
                              <BsFillBucketFill />
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <h1>...Loading</h1>
                    )}
                  </div>
                </Tab>
                <Tab eventKey="likedrecipe" title="Liked Recipe">
                  <div className="row">
                    {like ? (
                      like.map((item) => (
                        <div
                          className="col-3"
                          key={item.recipe_id}
                          onClick={() =>
                            router.push(`/recipe/${item.recipe_id}`)
                          }
                        >
                          <img
                            src={item.photo}
                            alt=""
                            style={{ height: "300px", width: "300px" }}
                          />
                          <h4
                            style={{
                              marginTop: "-40px",
                              marginLeft: "13px",
                              color: "white",
                            }}
                          >
                            {item.title}
                          </h4>
                          <div className="mt-4">
                            <button
                              key={item.id_liked}
                              onClick={() => DeleteLike(item.id_liked)}
                              className="btn btn-danger text-white"
                              style={{marginLeft: "250px",marginTop: "-100px",}}
                            >
                              <BsFillBucketFill />
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <h1>...Loading</h1>
                    )}
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default profile;
