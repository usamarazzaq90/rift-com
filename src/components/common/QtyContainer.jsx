import React from "react";
import Row from "./Row";
import Button from "./Button";

function QtyContainer() {
  return (
    <Row className="items-center">
      <Button title="-" className="w-[52px] h-[52px]" />
      <p className="w-[70px] text-center text-[16px] font-semibold">0</p>
      <Button title="+" className="w-[52px] h-[52px]" />
    </Row>
  );
}

export default QtyContainer;
