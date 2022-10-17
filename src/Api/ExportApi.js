import { BaseApi } from "./BaseApi";
//Auth
const UserLogin = (email, password, date, timezone) =>
  BaseApi.post("/login", {
    email: email,
    password: password,
    date_time: date,
    time_zone: timezone,
  });
const UserLogout = (Token) =>
  BaseApi.post(
    "/logout",
    {},
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
    }
  );

const UserLoginWithMobile = (mobile, password, date, time_zone) =>
  BaseApi.post("/login-phone", {
    mobile: mobile,
    password: password,
    date_time: date,
    time_zone: time_zone,
  });

const Register = (
  email,
  password,
  confirm_password,
  first_name,
  last_name,
  mobile,
  date_time,
  timezone,
  value
) =>
  BaseApi.post(
    "/register",
    {
      email: email,
      password: password,
      confirm_password: confirm_password,
      first_name: first_name,
      last_name: last_name,
      mobile: mobile,
      date_time: date_time,
      time_zone: timezone,
      country_code: value,
    },
    {
      headers: {
        Authorization: localStorage.getItem("Token"),
      },
    }
  );
const OTPSend = (otp, date) =>
  BaseApi.post(
    "/verification",
    {
      otp: otp,
      token: localStorage.getItem("DToken"),
      date_time: date,
      id: localStorage.getItem("id"),
    },
    {
      // headers: {
      //   Authorization: localStorage.getItem("Token"),
      // },
    }
  );
const OTPSendForgetEmail = (otp, date, email) =>
  BaseApi.post(
    "/verification",
    { otp: otp, email: email, date_time: date, id: null },
    {
      // headers: {
      //   Authorization: localStorage.getItem("Token"),
      // },
    }
  );
const OTPSendResetEmail = (email, date) =>
  BaseApi.post(
    "/reset-otp",
    { email: email, date_time: date, type: "email" },
    {
      // headers: {
      //   Authorization: localStorage.getItem("Token"),
      // },
    }
  );
const ForgottEmail = (email, date) =>
  BaseApi.post(
    "/forgot-password",
    { email: email, date_time: date, type: "email" },
    {
      // headers: {
      //   Authorization: localStorage.getItem("Token"),
      // },
    }
  );
const ForgottMobile = (email, date) =>
  BaseApi.post(
    "/forgot-password",
    { email: email, date_time: date, type: "mobile" },
    {
      // headers: {
      //   Authorization: localStorage.getItem("Token"),
      // },
    }
  );
const ChangeForgottMobile = (email, date, password, confirm_password) =>
  BaseApi.post(
    "/reset-password",
    {
      email: email,
      date_time: date,
      type: "mobile",
      password: password,
      confirm_password: confirm_password,
    },
    {
      // headers: {
      //   Authorization: localStorage.getItem("Token"),
      // },
    }
  );
const ChangeForgottEmail = (email, date, password, confirm_password) =>
  BaseApi.post(
    "/reset-password",
    {
      email: email,
      date_time: date,
      type: "email",
      password: password,
      confirm_password: confirm_password,
    },
    {
      // headers: {
      //   Authorization: localStorage.getItem("Token"),
      // },
    }
  );
const OTPSendResetMobile = (email, date) =>
  BaseApi.post(
    "/reset-otp",
    { phone: email, date_time: date, type: "phone" },
    {
      // headers: {
      //   Authorization: localStorage.getItem("Token"),
      // },
    }
  );

export default {
  ChangeForgottEmail,
  ChangeForgottMobile,
  ForgottMobile,
  ForgottEmail,
  OTPSendForgetEmail,
  OTPSendResetMobile,
  OTPSend,
  OTPSendResetEmail,
  Register,
  UserLogin,
  UserLogout,
  UserLoginWithMobile,
};
