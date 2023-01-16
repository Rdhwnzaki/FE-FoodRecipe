/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";

function login() {
  const [email_user, setEmail] = useState("");
  const [password_user, setPassword] = useState("");

  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const router = useRouter();
  const postData = async (e) => {
    e.preventDefault();
    console.log(email_user);
    console.log(password_user);
    let data = {
      email_user,
      password_user,
    };
    const config = {
      withCredentials: true,
    };
    const result = await axios.post(
      `${process.env.URL_BASE}/users/login`,
      data,
      config
    );
    const token = result.data.message.token;
    const id_user = result.data.message.id_user;
    const dataToken = {
      token: token,
      id_user: id_user,
    };
    const cookie = await fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToken),
    });
    const checkToken = await cookie.json();
    if (!checkToken) {
      return Swal.fire("Warning", "Login Failed", "error");
    }
    Swal.fire("Success", "Login Success", "success");
    console.log(dataToken);
    router.push("/");
  };

  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-12">
            <div
              className="img-fluid"
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
                  className="image-logo"
                  height={300}
                  style={{
                    opacity: "1",
                    marginTop: "300px",
                    // marginLeft: "160px",
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 col-sm-12 mt-sm-4">
            <h3 className="text-warning text-center">Welcome</h3>
            <h6 className="text-center">Log in into your exiting account</h6>
            <hr />
            <form onSubmit={postData}>
              <label htmlFor="basic-url" className="form-label">
                E-mail
              </label>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  minLength="10"
                  value={email_user}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  aria-describedby="basic-addon3"
                  placeholder="examplexxx@gmail.com"
                />
              </div>
              <label htmlFor="basic-url" className="form-label mt-4">
                Password
              </label>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  minLength="8"
                  value={password_user}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  aria-describedby="basic-addon3"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="btn btn-warning text-white mt-4 button"
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
              <h6
                style={{ marginTop: "20px", marginLeft: "-40px" }}
                className="text-lg-center text-sign"
              >
                Don’t have an account?{" "}
                <p
                  className="text-warning text-sign-yellow"
                  style={{ marginTop: "-19px" }}
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
