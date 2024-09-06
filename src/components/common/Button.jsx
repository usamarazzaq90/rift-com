import React from "react";

function Button({
  className = "h-[50px] w-[20%] mt-[50px]",
  title = "Shop Now",
  ...restProps
}) {
  return (
    <button
      {...restProps}
      className={` text-white bg-black text-[20px] font-medium ${className}`}
    >
      {title}
    </button>
  );
}

export default Button;
