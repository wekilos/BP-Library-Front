import React from "react";

const Pagination = (props) => {
  return (
    <div className="flex w-fit items-center cursor-pointer gap-6">
      <div>
        {props?.filter?.page != 1 ? (
          <svg
            onClick={() => props?.prev()}
            className="rotate-180"
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L4.29289 4.29289C4.68342 4.68342 4.68342 5.31658 4.29289 5.70711L1 9"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9L1.70711 5.70711C1.31658 5.31658 1.31658 4.68342 1.70711 4.29289L5 1"
              stroke="#B8BFCC"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>
      <div className="w-fit flex gap-6">
        {props?.pages?.length <= 10
          ? props?.pages?.map((item, i) => {
              return (
                <div
                  key={"page" + i + 1}
                  onClick={() => props?.goTo(item)}
                  className={`text-[14px] font-[400]  ${
                    props?.filter?.page == item && "text-blue"
                  }`}
                >
                  {item}
                </div>
              );
            })
          : props?.pages?.map((item, i) => {
              return i + 1 <= 2 || props?.pages?.length - 2 <= i ? (
                <div
                  key={"page" + i + 1}
                  onClick={() => props?.goTo(item)}
                  className={`text-[14px] font-[400]  ${
                    props?.filter?.page == item && "text-blue"
                  }`}
                >
                  {item}
                </div>
              ) : (
                props?.filter?.page == item && (
                  <div className="flex gap-4 items-center justify-between">
                    <div key={"page." + i}>...</div>
                    <div
                      key={"page" + i + 1}
                      onClick={() => props?.goTo(item)}
                      className={`text-[14px] font-[400]  ${
                        props?.filter?.page == item && "text-blue"
                      }`}
                    >
                      {props?.filter?.page}
                    </div>

                    <div key={"page.." + i}>...</div>
                  </div>
                )
              );
            })}
      </div>
      <div>
        {props?.filter?.page < props?.meta / props?.filter?.limit ? (
          <svg
            onClick={() => props?.next()}
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L4.29289 4.29289C4.68342 4.68342 4.68342 5.31658 4.29289 5.70711L1 9"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            className="rotate-180"
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9L1.70711 5.70711C1.31658 5.31658 1.31658 4.68342 1.70711 4.29289L5 1"
              stroke="#B8BFCC"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default React.memo(Pagination);
