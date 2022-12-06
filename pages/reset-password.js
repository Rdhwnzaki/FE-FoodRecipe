/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

function resetPassword() {
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
            <form action="">
              <label for="basic-url" className="form-label">
                Create New Password
              </label>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  aria-describedby="basic-addon3"
                  placeholder="Create New Password"
                />
              </div>
              <label for="basic-url" className="form-label mt-4">
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
              </div>
              <button
                type="submit"
                className="btn btn-warning text-white mt-4"
                style={{ position: "absolute", width: "420px", height: "50px" }}
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default resetPassword;
