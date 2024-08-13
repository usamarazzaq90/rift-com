import React from "react";
import Row from "./common/Row";

function ProductCard() {
  return (
    <div className="w-full shadow pb-[5px] ">
      <img
        src="https://images.unsplash.com/photo-1714070700742-b59b045d2dd9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="prodCard"
        className="w-full object-cover h-[400px] "
      />
      <Row className="px-[10px]">
        <h6 className="text-black text-[16px] font-semibold mt-[18px] ">
          Demo Title
        </h6>
      </Row>
      <Row className="justify-between mt-[16px] px-[10px] mb-[10px] ">
        <p className="text-[16px] text-[#00000080] ">Clothing</p>
        <p className="text-[16px] text-[#00000080] font-semibold ">$20</p>
      </Row>
    </div>
  );
}

export default ProductCard;
