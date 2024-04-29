import axios from "axios";

// eslint-disable-next-line
const apiURL = process.env.REACT_APP_API_URL;

export const getAllUser = async () => {
  try {
    let res = await axios.get(`http://localhost:8000/api/user/all-user`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const editUser = async ({
  oId,
  name,
  email,
  password,
  verified,
  userRole,
}) => {
  let data = { oId, name, email, password, verified, userRole };
  try {
    let res = await axios.post(`http://localhost:8000/api/user/edit-userAdmin`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const signupReq = async ({
  name,
  email,
  password,
  cPassword,
  verified,
  userRole,
}) => {
  const data = { name, email, password, cPassword, verified, userRole };
  try {
    let res = await axios.post(`http://localhost:8000/api/signupAdmin`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};



export const deleteUser = async (oId) => {
  try {
    let res = await axios.post(`http://localhost:8000/api/user/delete-userAdmin`, { oId });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
