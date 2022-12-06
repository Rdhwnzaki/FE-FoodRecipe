/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/login";

function login() {
  const [email_user, setEmail] = useState("");
  const [password_user, setPassword] = useState("");

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(email_user);
    console.log(password_user);
    let data = {
      email_user,
      password_user,
    };
    dispatch(loginUser(data));
  };

  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              style={{
                backgroundImage: `url(/bg2.png)`,
                height: "900px",
                width: "700px",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(/Rectangle.png)`,
                  height: "100%",
                  width: "100%",
                  opacity: "0.5",
                }}
                className="col p-4 "
              >
                <Image
                  src="/logo.png"
                  width={300}
                  height={300}
                  style={{
                    opacity: "1",
                    marginTop: "300px",
                    marginLeft: "180px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-1">
            <h3 className="text-warning text-center">Welcome</h3>
            <h6 className="text-center">Log in into your exiting account</h6>
            <hr />
            <form onSubmit={postData}>
              <label for="basic-url" className="form-label">
                E-mail
              </label>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email_user}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  aria-describedby="basic-addon3"
                  placeholder="examplexxx@gmail.com"
                />
              </div>
              <label for="basic-url" className="form-label mt-4">
                Password
              </label>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password_user}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  aria-describedby="basic-addon3"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="btn btn-warning text-white mt-4"
                style={{ position: "absolute", width: "420px", height: "50px" }}
              >
                Log in
              </button>
            </form>
            <Link href="/forgot-password">
              <h6 style={{ marginTop: "110px" }} className="text-end">
                Forgot Password ?
              </h6>
            </Link>
            <Link href="/register">
              <h6 style={{ marginTop: "20px" }} className="text-center">
                Don’t have an account?{" "}
                <p
                  className="text-warning "
                  style={{ marginLeft: "250px", marginTop: "-19px" }}
                >
                  Sign Up
                </p>
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
