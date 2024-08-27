import React from "react";
import Layout from "../common/Layout";
import Container from "../common/Container";
import Row from "../common/Row";
import CartItems from "../Cart/CartItems";

function Cart() {
  return (
    <Layout>
      <Container className="my-[40px]">
        <Row className="mb-[30px] justify-center">
          <h6 className="text-[24px] text-slate-700 font-semibold">
            Cart Details
          </h6>
        </Row>
        <Row className="flex-col mb-[30px]">
          <Row className="h-[40px] bg-gray-400 w-full px-[20px] items-center">
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Image
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Title
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Price
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%] text-center">
              Qty
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%] text-center">
              Total
            </h6>
          </Row>
          <CartItems />
          <CartItems />
          <CartItems />
          <CartItems />
          <CartItems />
          <CartItems />
        </Row>
      </Container>
    </Layout>
  );
}

export default Cart;
