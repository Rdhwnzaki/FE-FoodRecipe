/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import styles from "../styles/Landing.module.css";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NavbarAfter from "../components/NavbarAfter";

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.URL_BASE}/recipe`);
  const { token } = context.req.cookies;
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
      login: token ? true : false,
    },
  };
}
const index = ({ data, login }) => {
  const router = useRouter();
  return (
    <div>
      <Navbar login={login} />
      <div className="container">
        <div
          className="row align-items-center bg-white"
          style={{ marginTop: "100px" }}
        >
          <div className="col-4 ">
            <h1>Discover Recipe & Delicious Food</h1>
            <input
              type="text"
              className="form-control rounded-2 bg-light"
              name="search"
              placeholder="search restaurant, food"
            />
          </div>
          <div className="col-4 offset-3 " style={{ marginBottom: "120px" }}>
            <Image src="/food1.png" height={500} width={500} priority />
          </div>
        </div>
        <div className="row align-items-center bg-white">
          <div className="col-1">
            <div
              style={{
                backgroundColor: "#EFC81A",
                height: "60px",
                width: "10px",
              }}
            ></div>
          </div>
          <div className="col-11">
            <h3 className="mt-4">Popular For You !</h3>
          </div>
        </div>
        <div className="row align-items-center bg-white">
          <div
            className="col-6"
            style={{ marginTop: "90px", marginBottom: "100px" }}
          >
            <Image src="/food2.png" height={500} width={500} />
          </div>
          <div className="col-4 offset-1">
            <h1>Healthy Bone Broth Ramen (Quick & Easy)</h1>
            <div
              style={{
                backgroundColor: "#6F6A40",
                height: "2px",
                width: "70px",
              }}
            ></div>
            <p className="mt-4">
              Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
              hurry? That’s right!
            </p>
            <Button title="Learn More" />
          </div>
        </div>
        <div className="row align-items-center bg-white">
          <div className="col-1">
            <div
              style={{
                backgroundColor: "#EFC81A",
                height: "60px",
                width: "10px",
              }}
            ></div>
          </div>
          <div className="col-11">
            <h3 className={[styles.colorfont, "mt-5"]}>New Recipe</h3>
          </div>
          <div className="row align-items-center bg-white">
            <div
              className="col-6"
              style={{ marginTop: "90px", marginBottom: "100px" }}
            >
              <Image src="/food3.png" height={500} width={500} />
            </div>
            <div className="col-4 offset-1">
              <h1>Healthy Bone Broth Ramen (Quick & Easy)</h1>
              <div
                style={{
                  backgroundColor: "#6F6A40",
                  height: "2px",
                  width: "70px",
                }}
              ></div>
              <p className="mt-4">
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <Button title="Learn More" />
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-white">
          <div className="col-1">
            <div
              style={{
                backgroundColor: "#EFC81A",
                height: "60px",
                width: "10px",
              }}
            ></div>
          </div>
          <div className="col-11">
            <h3 className="mt-4">Popular Recipe</h3>
          </div>
          <div className="row align-items-center bg-white mb-5">
            {data.data.map((item) => (
              <div
                className="col-4"
                style={{ marginTop: "90px", marginBottom: "10px" }}
                key={item.id_recipe}
                onClick={() => router.push(`/recipe/${item.id_recipe}`)}
              >
                <img
                  src={item.photo}
                  style={{ height: "400px", width: "400px" }}
                />
                <h6
                  style={{ marginTop: "-40px", marginLeft: "13px" }}
                  className="text-white"
                >
                  {item.title}
                </h6>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
