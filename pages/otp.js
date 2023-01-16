/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { otpPost } from "../redux/actions/otp";

function otp() {
  const [otp, setOtp] = useState("");
  const [email_user, setEmail] = useState("");

  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    let data = {
      otp,
      email_user,
    };
    dispatch(otpPost(data));
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
            <form onSubmit={postData}>
              <label htmlFor="basic-url" className="form-label">
                E-Mail
              </label>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email_user}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="basic-addon3"
                  placeholder="Email"
                />
              </div>
              <label htmlFor="basic-url" className="form-label">
                Code 6 Digit
              </label>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  aria-describedby="basic-addon3"
                  placeholder="OTP"
                />
              </div>

              <button
                type="submit"
                className="btn btn-warning text-white mt-4 button-email"
                style={{ position: "absolute", width: "420px", height: "50px" }}
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default otp;
