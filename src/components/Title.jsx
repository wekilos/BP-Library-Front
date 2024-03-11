import React from "react";
import left from "../images/titleLeft.svg";
import right from "../images/titleRight.svg";
import bottom from "../images/titleBottom.svg";

const Title = ({ text }) => {
  return (
    <div className="flex justify-center items-center flex-wrap">
      <div className=" w-full flex items-center justify-center gap-6">
        <img className="w-[60px]  object-contain" src={left} alt="left" />
        <p className="m-0 text-[30px] font-[400] ">{text}</p>
        <img className="w-[60px]  object-contain" src={right} alt="right" />
      </div>
      <div className="w-full flex justify-center">
        <img className=" w-[60px] object-contain" src={bottom} alt="bottom" />
      </div>
    </div>
  );
};

export default React.memo(Title);
