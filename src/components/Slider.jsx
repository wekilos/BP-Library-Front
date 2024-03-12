import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { BASE_URL } from "../utils/axiosIntance";

const SimpleSlider = ({ slides }) => {
  const history = useHistory();
  const refSimilar = useRef();

  const ScroollRight = (refNewProduct) => {
    refNewProduct.current.scrollBy(224, 0);
  };
  const ScroollLeft = (refNewProduct) => {
    refNewProduct.current.scrollBy(-224, 0);
  };

  return (
    <div className="w-full h-[300px] flex items-center gap-2 justify-between my-2">
      <div className="bg-main cursor-pointer rounded-[100%] w-[20px]  h-[20px]  text-white flex justify-center items-center">
        <KeyboardArrowLeftIcon
          onClick={() => ScroollLeft(refSimilar)}
          className="text-white text-[12px] font-[900]"
        />
      </div>

      <div
        ref={refSimilar}
        className="w-full flex  justify-start gap-6 overflow-x-auto scrollbar-hide"
      >
        {slides?.map((item, i) => {
          return (
            <div
              onClick={() => history.push({ pathname: "/item/" + item?.id })}
              key={"surat" + i}
              className="    min-w-[200px] w-[200px] cursor-pointer "
            >
              <img
                className="w-full object-contain"
                src={BASE_URL + item?.placeholder}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="bg-main cursor-pointer rounded-[100%] w-[20px]  h-[20px]  text-white flex justify-center items-center">
        <KeyboardArrowRightIcon
          onClick={() => ScroollRight(refSimilar)}
          className="text-white text-[18px]   font-[900]"
        />
      </div>
    </div>
  );
};

export default React.memo(SimpleSlider);
