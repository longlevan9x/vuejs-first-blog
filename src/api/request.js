import axios from "axios";
import Constants from "../utils/constants";

const Request = axios.create({
  baseURL: Constants.BASE_URL_API,
  xsrfHeaderName: "X-CSRF-Token",
  withCredentials: false
});

export default Request;
