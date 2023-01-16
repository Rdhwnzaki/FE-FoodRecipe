/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { regisUser } from "../redux/actions/register";

export async function getStaticProps(context) {
  let url = `${process.env.URL_BASE}/users/register`;
  console.log(url);
  return {
    props: {
      url,
    },
  };
}

function Register({ url }) {
  console.log("url", url);
  const [email_user, setEmail] = useState("");
  const [password_user, setPassword] = useState("");
  const [fullname_user, setFullname] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(fullname_user);
    console.log(email_user);
    console.log(phone);
    console.log(password_user);
    let data = {
      fullname_user,
      email_user,
      phone,
      password_user,
    };
    dispatch(regisUser(data, url));
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
            <h3 className="text-warning text-center">Let’s Get Started !</h3>
            <h6 className="text-center">
              Create new account to access all features
            </h6>
            <hr />
            <form onSubmit={postData}>
              <label htmlFor="basic-url" className="form-label">
                Name
              </label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={fullname_user}
                  onChange={(e) => setFullname(e.target.value)}
                  name="fullname_user"
                  aria-describedby="basic-addon3"
                  placeholder="Name"
                />
              </div>
              <label htmlFor="basic-url" className="form-label mt-4">
                Email address*
              </label>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  minLength="10"
                  value={email_user}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email_user"
                  aria-describedby="basic-addon3"
                  placeholder="Enter email address"
                />
              </div>
              <label htmlFor="basic-url" className="form-label mt-4">
                Phone Number
              </label>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  name="phone"
                  aria-describedby="basic-addon3"
                  placeholder="08xxxxxxxxxx"
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
                  name="password_user"
                  aria-describedby="basic-addon3"
                  placeholder="Create New Password"
                />
              </div>
              {/* <label for="basic-url" className="form-label mt-4">
                New Password
              </label>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  aria-describedby="basic-addon3"
                  placeholder="New Password"
                />
              </div> */}
              <button
                type="submit"
                className="btn btn-warning text-white mt-4 button-register"
                style={{ position: "absolute", width: "420px", height: "50px" }}
              >
                Register Account
              </button>
            </form>
            <Link href="/login">
              <h6
                style={{ marginTop: "100px", marginRight: "50px" }}
                className="text-center"
              >
                Already have account?{" "}
                <p
                  className="text-warning "
                  style={{ marginLeft: "250px", marginTop: "-19px" }}
                >
                  Log in Here
                </p>
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
