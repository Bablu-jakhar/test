import { create } from "apisauce";
const BaseApi = create({
  baseURL: "",
  headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
});
// const BaseUrlImage = ''
export { BaseApi };
