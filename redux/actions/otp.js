import axios from "axios";
import Router from "next/router";

export const otpPost = (data) => async (dispatch) => {
  try {
    dispatch({ type: "CONFIRM_OTP_PENDING" });
    const result = await axios.post(`http://localhost:3000/users/verif`, data);
    const otp = result.data.message;
    dispatch({ type: "CONFIRM_OTP_SUCCESS", payload: otp });
    Router.push("/");
    console.log("Confirm Otp Success");
  } catch (err) {
    console.log("User Confirm  Otp Fail");
    console.log(err);
  }
};
