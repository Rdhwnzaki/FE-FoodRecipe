/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ModalEdit from "../components/Modal";
import NavTabs from "../components/NavTabs";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import NavbarAfter from "../components/NavbarAfter";
import Footer from "../components/Footer";

export const getServerSideProps = async (context) => {
  const { id_user } = context.req.cookies;
  console.log(id_user);
  if (!id_user) {
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
      id_user: id_user,
    },
  };
};

function profile({ id_user }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // let users = `http://localhost:3000/users/${token.id_user}`;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id_user}`)
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

  return (
    <div>
      <NavbarAfter />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-1">
            <img
              src={data ? data[0].photo : "data not found"}
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              className="avatar-profile"
            />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-1">
            <ModalEdit />
          </div>
        </div>
        <div className="row">
          <div
            className="col-6"
            style={{ marginLeft: "570px", marginTop: "-50px" }}
          >
            <h4> {data ? data[0].fullname_user : "data not found"}</h4>
          </div>
        </div>
        <div className="row mb-5">
          <NavTabs />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default profile;
