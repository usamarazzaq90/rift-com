import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import axios from "axios";
import Row from "../common/Row";
import { Link } from "react-router-dom";
import apiEndpoints from "../../apis/endpoint";
import client from "../../apis";

// useEffect(() => {
//   // 1- logic will be executed everytime a prop or state updates
// });

// useEffect(() => {
//   // 2- It will only work before and after component mounted
// }, []);

// useEffect(() => {
//   // 3- adding on to 2, it will execute everytime the given args in dependency array change
// }, [arg1, arg2, arg3]);

// const [a,b,c]=[1,2,3]   arrray destructing

function PopularProducts() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const response = client.get(apiEndpoints.products());
      setProducts((await response).data.docs);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    // 2- It will only work before and after component mounted
    getData();
  }, []);

  return (
    <Container>
      <Row className="justify-center my-[20px] uppercase">
        <h1 className="text-[30px] font-semibold text-[#1e2832]">
          Popular Products
        </h1>
      </Row>
      <Row className="gap-[24px]">
        <div className="h-[648px] w-[52px] relative ">
          <p className="text-[34px] h-full w-[648px] text-black -rotate-90 absolute text-center -z-[1]">
            Explore new and popular styles
          </p>
        </div>
        <Link to={`/product/${products[0]?._id}`}>
          <img
            className="w-[648px] h-[648px] object-cover cursor-pointer"
            // src={products[0] && products[0].img}
            src={products[0]?.img} //it's called optional changing or safe navigation
            alt="top popular"
          />
        </Link>
        <Row className="flex-wrap w-1/2 gap-[24px]">
          {products.slice(1).map((item) => (
            <Link
              to={`/product/${item._id}`}
              className="w-[46%] h-[312px]"
              key={item._id}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-[312px] h-full object-cover"
              />
            </Link>
          ))}
        </Row>
      </Row>
    </Container>
  );
}

export default PopularProducts;
