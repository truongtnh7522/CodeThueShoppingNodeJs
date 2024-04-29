import React, { Fragment, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { HomeContext } from "./index";
import { getAllCategory } from "../../admin/categories/FetchApi";
import { getAllProduct, productByPrice } from "../../admin/products/FetchApi";
import "./style.css";

// eslint-disable-next-line
const apiURL = process.env.REACT_APP_API_URL;

const CategoryList = () => {
  const history = useHistory();
  const { data } = useContext(HomeContext);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let responseData = await getAllCategory();
      if (responseData && responseData.Categories) {
        setCategories(responseData.Categories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`${data.categoryListDropdown ? "" : "hidden"} my-4`}>
      <hr />
      <div className="py-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories && categories.length > 0 ? (
          categories.map((item, index) => {
            return (
              <Fragment key={index}>
                <div
                  onClick={(e) =>
                    history.push(`/products/category/${item._id}`)
                  }
                  className="col-span-1 m-2 flex flex-col items-center justify-center space-y-2 cursor-pointer"
                >
                  <img
                    src={`http://localhost:8000/uploads/categories/${item.cImage}`}
                    alt="pic"
                  />
                  <div className="font-medium">{item.cName}</div>
                </div>
              </Fragment>
            );
          })
        ) : (
          <div className="text-xl text-center my-4">Không có loại sản phẩm nào</div>
        )}
      </div>
    </div>
  );
};

const FilterList = () => {
  const { data, dispatch } = useContext(HomeContext);
  const [range, setRange] = useState(0);
  const [exactPrice, setExactPrice] = useState('');
  const [filterMode, setFilterMode] = useState('range'); // 'range' hoặc 'exact'

  const rangeHandle = (e) => {
    setRange(e.target.value);
    fetchData(e.target.value);
  };

  const exactPriceHandle = (e) => {
    setExactPrice(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      filterProductsByExactPrice();
    }
  };

  const fetchData = async (price) => {
    // Hàm này giữ nguyên như cũ
  };

  const filterProductsByExactPrice = async () => {
    dispatch({ type: "loading", payload: true });
    try {
      let responseData = await productByPrice(exactPrice);
      if (responseData && responseData.Products) {
        dispatch({ type: "setProducts", payload: responseData.Products });
        dispatch({ type: "loading", payload: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeFilterBar = () => {
    fetchData("all");
    dispatch({ type: "filterListDropdown", payload: !data.filterListDropdown });
    setRange(0);
    setExactPrice('');
  };

  const toggleFilterMode = () => {
    setFilterMode(filterMode === 'range' ? 'exact' : 'range');
    setExactPrice(''); // Đặt lại giá trị nhập số khi chuyển chế độ
  };

  return (
    <div className={`${data.filterListDropdown ? "" : "hidden"} my-4`}>
      <hr />
      <div className="w-full flex flex-col">
        <div className="font-medium py-2">Lọc theo giá</div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col space-y-2 w-2/3 lg:w-2/4">
            <label htmlFor="points" className="text-sm">
              Giá (từ 0 đến 20.000.000 ₫):{" "}
              <span className="font-semibold text-yellow-700">{parseInt(range).toLocaleString()}₫</span>{" "}
            </label>
            <input
              value={range}
              className="slider"
              type="range"
              id="points"
              min="0"
              max="20000000"
              step="10"
              onChange={(e) => rangeHandle(e)}
              disabled={filterMode === 'exact'} // Vô hiệu hóa khi chế độ là 'exact'
            />
            <label htmlFor="exactPrice" className="text-sm">
              Giá chính xác:
            </label>
            <input
              value={exactPrice}
              className="border border-gray-300 rounded px-2 py-1"
              type="number"
              id="exactPrice"
              onChange={(e) => exactPriceHandle(e)}
              onKeyDown={handleEnterPress}
              disabled={filterMode === 'range'} // Vô hiệu hóa khi chế độ là 'range'
            />
          </div>
          <div onClick={toggleFilterMode} className="cursor-pointer">
            <svg
              className="w-8 h-8 text-gray-700 hover:bg-gray-200 rounded-full p-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {filterMode === 'range' ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              )}
            </svg>
          </div>
          <div onClick={(e) => closeFilterBar()} className="cursor-pointer">
            <svg
              className="w-8 h-8 text-gray-700 hover:bg-gray-200 rounded-full p-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const Search = () => {
  const { data, dispatch } = useContext(HomeContext);
  const [search, setSearch] = useState("");
  const [productArray, setPa] = useState(null);

  const searchHandle = (e) => {
    setSearch(e.target.value);
    fetchData();
    dispatch({
      type: "searchHandleInReducer",
      payload: e.target.value,
      productArray: productArray,
    });
  };

  const fetchData = async () => {
    dispatch({ type: "loading", payload: true });
    try {
      setTimeout(async () => {
        let responseData = await getAllProduct();
        if (responseData && responseData.Products) {
          setPa(responseData.Products);
          dispatch({ type: "loading", payload: false });
        }
      }, 700);
    } catch (error) {
      console.log(error);
    }
  };

  const closeSearchBar = () => {
    dispatch({ type: "searchDropdown", payload: !data.searchDropdown });
    fetchData();
    dispatch({ type: "setProducts", payload: productArray });
    setSearch("");
  };

  return (
    <div
      className={`${
        data.searchDropdown ? "" : "hidden"
      } my-4 flex items-center justify-between`}
    >
      <input
        value={search}
        onChange={(e) => searchHandle(e)}
        className="px-4 text-xl py-4 focus:outline-none"
        type="text"
        placeholder="Tìm sản phẩm..."
      />
      <div onClick={(e) => closeSearchBar()} className="cursor-pointer">
        <svg
          className="w-8 h-8 text-gray-700 hover:bg-gray-200 rounded-full p-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};

const ProductCategoryDropdown = (props) => {
  return (
    <Fragment>
      <CategoryList />
      <FilterList />
      <Search />
    </Fragment>
  );
};

export default ProductCategoryDropdown;
