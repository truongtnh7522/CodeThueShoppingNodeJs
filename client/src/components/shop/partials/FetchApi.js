import axios from "axios";
// eslint-disable-next-line
const apiURL = process.env.REACT_APP_API_URL;

export const cartListProduct = async () => {
  let carts = JSON.parse(localStorage.getItem("cart"));
  let productArray = [];
  if (carts) {
    for (const cart of carts) {
      productArray.push(cart.id);
    }
  }
  try {
    let res = await axios.post(`http://localhost:8000/api/product/cart-product`, {
      productArray,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
