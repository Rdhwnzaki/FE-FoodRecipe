/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ModalEdit from "../components/Modal";
import NavTabs from "../components/NavTabs";
import { useSelector } from "react-redux";
import axios from "axios";

function profile() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const token = useSelector((state) => state.user.user);
  let users = `http://localhost:3000/users/${token.id_user}`;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .get(users)
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
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-1">
          <Image src={"/profile.png"} width={100} height={100} />
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
  );
}

export default profile;
