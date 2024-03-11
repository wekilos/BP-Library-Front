import React from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../images/image.png";
import { BASE_URL } from "../utils/axiosIntance";

const SimpleSlider = ({ slides }) => {
  const history = useHistory();
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="w-full h-300px]">
      <Slider {...settings}>
        {slides?.map((item, i) => {
          return (
            <div
              onClick={() => history.push({ pathname: "/item/" + item?.id })}
              key={"surat" + i}
              className="h-[300px] w-[auto] cursor-pointer "
            >
              <img
                className="object-contain h-full"
                src={BASE_URL + item?.placeholder}
                alt=""
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default React.memo(SimpleSlider);
