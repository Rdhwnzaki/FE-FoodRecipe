/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

function forgotPassword() {
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
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 col-sm-12 mt-sm-4">
            <h3 className="text-warning text-center">Forgot Password?</h3>
            <h6 className="text-center">
              We just need your registered e-mail address to send your password
              resend
            </h6>
            <hr />
            <form action="">
              <label for="basic-url" className="form-label">
                E-mail
              </label>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="basic-addon3"
                  placeholder="examplexxx@gmail.com"
                />
              </div>
              <button
                type="submit"
                className="btn btn-warning text-white mt-4 button-email"
                style={{ position: "absolute", width: "420px", height: "50px" }}
              >
                Send E-mail
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forgotPassword;
