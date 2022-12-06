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
            <form onSubmit={postData}>
              <label for="basic-url" className="form-label">
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
              <label for="basic-url" className="form-label">
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
                className="btn btn-warning text-white mt-4"
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
