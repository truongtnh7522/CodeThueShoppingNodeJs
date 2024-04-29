import axios from "axios";
// eslint-disable-next-line
const apiURL = process.env.REACT_APP_API_URL;

export const getSingleProduct = async (pId) => {
  try {
    let res = await axios.post(`http://localhost:8000/api/product/single-product`, {
      pId: pId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postAddReview = async (formData) => {
  try {
    let res = await axios.post(`http://localhost:8000/api/product/add-review`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postDeleteReview = async (formData) => {
  try {
    let res = await axios.post(`http://localhost:8000/api/product/delete-review`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
