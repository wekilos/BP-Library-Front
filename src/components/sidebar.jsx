import React, { useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axiosIntance";
import { useState } from "react";

const Sidebar = () => {
  const { id } = useParams();
  const path = useLocation();
  const history = useHistory();
  const [groups, setGroups] = React.useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    getGroups();
  }, []);

  const getGroups = () => {
    axiosInstance
      .get("/api/category/all")
      .then((data) => {
        console.log("data", data.data);
        setGroups(data.data?.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-full shadow-sm flex flex-col justify-between">
      <div className="h-fit">
        {groups?.map((item, i) => {
          return (
            <div
              onClick={() => {
                item?.card_type === "path"
                  ? history.push({ pathname: "/id=" + item?.id + "/q=" })
                  : window.open(item?.link, "_blank");
              }}
              onMouseLeave={() => setIndex(-1)}
              onMouseEnter={() => setIndex(i)}
              key={"category" + i}
              className={`${
                item?.id == id?.slice(3) ? " text-white bg-main " : ""
              } h-[70px] line-clamp-2 flex items-center justify-start gap-4 pl-5 cursor-pointer hover:bg-main hover:text-white text-main text-[18px] `}
            >
              {index == i || item?.id == id?.slice(3) ? (
                <div dangerouslySetInnerHTML={{ __html: item?.icon_white }} />
              ) : (
                <div dangerouslySetInnerHTML={{ __html: item?.icon }} />
              )}
              <h1 className=" line-clamp-2 w-full  ">{item?.name_tm}</h1>
            </div>
          );
        })}
      </div>
      <div className="h-[70px]    ">
        <div className="text-[12px] h-full w-full  text-[#636363] flex items-center justify-center">
          Powered by Seljeriş we maglumatlar bölümi ©2024
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
