import React from "react";
import Container from "../common/Container";
import Row from "../common/Row";

function PopularProducts() {
  return (
    <Container>
      <Row className="justify-center my-[20px] uppercase">
        <h1 className="text-[30px] font-semibold text-[#1e2832]">
          Popular Products
        </h1>
      </Row>
      <Row className="gap-[24px]">
        <div className="h-[648px] w-[52px] relative ">
          <p className="text-[34px] h-full w-[648px] text-black -rotate-90 absolute text-center -z-1">
            Explore new and popular styles
          </p>
        </div>
        <img
          className="w-[648px] h-[648px] object-cover"
          src="https://images.unsplash.com/photo-1714070700742-b59b045d2dd9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="top popular"
        />
        <Row className="flex-wrap w-1/2 gap-[24px]">
          <div className="w-[46%] h-[312px]">
            <img
              src="https://images.unsplash.com/photo-1714070700742-b59b045d2dd9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
              className="w-[312px] h-full object-cover"
            />
          </div>
          <div className="w-[46%] h-[312px]">
            <img
              src="https://images.unsplash.com/photo-1714070700742-b59b045d2dd9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
              className="w-[312px] h-full object-cover"
            />
          </div>
          <div className="w-[46%] h-[312px]">
            <img
              src="https://images.unsplash.com/photo-1714070700742-b59b045d2dd9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
              className="w-[312px] h-full object-cover"
            />
          </div>
          <div className="w-[46%] h-[312px]">
            <img
              src="https://images.unsplash.com/photo-1714070700742-b59b045d2dd9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
              className="w-[312px] h-full object-cover"
            />
          </div>
        </Row>
      </Row>
    </Container>
  );
}

export default PopularProducts;
