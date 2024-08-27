import React from "react";
import Row from "../common/Row";
import QtyContainer from "../common/QtyContainer";

function CartItems() {
  return (
    <Row className="border-[1px] border-gray-400 rounded items-center w-full py-[10px] px-[20px] mb-[30px]">
      <Row className="w-[20%]">
        <img
          className="w-2/3 h-[150px] object-cover rounded-[6px]"
          src="https://images.unsplash.com/photo-1714070700742-b59b045d2dd9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cart Product"
        />
      </Row>
      <p className="w-[20%] text-[16px] text-black font-medium">Demo Product</p>
      <p className="w-[20%] text-[16px] text-black font-medium">$20</p>
      <Row className="w-[20%] justify-center">
        <QtyContainer />
      </Row>
      <div className="w-[20%] text-center text-[16px] text-black font-medium">
        $1040
      </div>
    </Row>
  );
}

export default CartItems;
