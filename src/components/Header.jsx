import React from "react";

import logo from "../images/logo.png";
import { useState } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const history = useHistory();
  const path = useLocation();
  const { id, q } = useParams();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch("");
  }, [id]);

  const goToSearch = () => {
    if (path.pathname === "/") {
      console.log(path.pathname);
      history.push({ pathname: "/q=" + search });
    } else if (path.pathname.slice(0, 3) === "/q=") {
      console.log(path.pathname);

      // setSearch(q.slice(2));

      history.push({ pathname: "/q=" + search });
    } else if (path.pathname.slice(0, 4) === "/id=") {
      history.push({ pathname: "/id=" + id.slice(3) + "/q=" + search });

      console.log(path.pathname);

      // setSearch(q.slice(2));
    }
  };
  return (
    <div className="w-full border-b-[5px]  sticky top-0 z-20 bg-[#F7F8FA] border-main h-[10vh] min-h-[90px] flex justify-between items-center">
      <div
        onClick={() => {
          history.push({ pathname: "/" });
          setSearch("");
        }}
        className="cursor-pointer min-w-[300px] pl-4 h-full w-[23%] border-r-[1px] border-[#efefef] flex items-center justify-start"
      >
        <img className="h-[50px] object-contain" src={logo} alt="" />
      </div>

      <div className="max-w-[77%]  w-[77%] flex justify-between items-center px-6">
        <div className="flex items-center justify-center">
          <h1 className="leading-[28px] text-[20px] font-[600] text-main">
            Türkmenistanyň Baş prokuraturasy
          </h1>
        </div>
        <div className="w-[420px] h-[45px] border-[1px] flex justify-between border-main rounded-[6px] bg-white">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") goToSearch();
            }}
            className=" h-[43px] w-[360px] px-4 outline-none rounded-[6px]"
            placeholder="Gözleg..."
          />
          <svg
            onClick={() => goToSearch()}
            className="cursor-pointer"
            width="58"
            height="45"
            viewBox="0 0 58 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H53C55.7614 0 58 2.23858 58 5V40C58 42.7614 55.7614 45 53 45H0V0Z"
              fill="#426041"
            />
            <path
              d="M38.8099 31.8522L33.8146 26.857C35.2215 25.2028 35.9339 23.0685 35.8027 20.9009C35.6715 18.7333 34.7068 16.7006 33.1107 15.2282C31.5145 13.7558 29.4107 12.9579 27.2396 13.0017C25.0685 13.0455 22.9985 13.9274 21.463 15.463C19.9274 16.9985 19.0455 19.0685 19.0017 21.2396C18.9579 23.4107 19.7558 25.5145 21.2282 27.1107C22.7006 28.7068 24.7333 29.6715 26.9009 29.8027C29.0685 29.9339 31.2028 29.2215 32.857 27.8146L37.8522 32.8099C37.9799 32.9333 38.151 33.0015 38.3286 33C38.5062 32.9984 38.6761 32.9272 38.8016 32.8016C38.9272 32.6761 38.9984 32.5062 39 32.3286C39.0015 32.151 38.9333 31.9799 38.8099 31.8522ZM27.4232 28.4635C26.0308 28.4635 24.6696 28.0506 23.5118 27.277C22.3541 26.5034 21.4517 25.4038 20.9189 24.1174C20.386 22.831 20.2466 21.4154 20.5182 20.0497C20.7899 18.684 21.4604 17.4296 22.445 16.445C23.4296 15.4604 24.684 14.7899 26.0497 14.5182C27.4154 14.2466 28.831 14.386 30.1174 14.9189C31.4038 15.4517 32.5034 16.3541 33.277 17.5118C34.0506 18.6696 34.4635 20.0308 34.4635 21.4232C34.4614 23.2898 33.719 25.0793 32.3991 26.3991C31.0793 27.719 29.2898 28.4614 27.4232 28.4635Z"
              fill="#F8F6F7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
