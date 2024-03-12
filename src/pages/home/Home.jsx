import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import SimpleSlider from "../../components/Slider";
import { BASE_URL, axiosInstance } from "../../utils/axiosIntance";
import { useParams, useHistory } from "react-router-dom";
import PageLoading from "../../components/PageLoading";

const Home = () => {
  const { id, q } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, [id, q]);

  const getCategories = () => {
    setLoading(true);
    let search_query = q && q?.length > 0 ? q.slice(2) : "";
    console.log(search_query);
    axiosInstance
      .get("/api/category/all", {
        params: {
          search_query: search_query,
        },
      })
      .then((data) => {
        console.log(data.data);
        setCategories(data.data?.rows);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="w-full">
      {loading ? (
        <PageLoading />
      ) : (
        categories?.map((category, i) => {
          return (
            <div key={"cate" + i} className="w-full">
              {i === 0 && category?.CategoryItems?.length > 0 && (
                <div className="w-full mb-5 min-h-fit">
                  <Title text={category?.name_tm} />
                  <div className="w-full py-2 ">
                    <SimpleSlider slides={category?.CategoryItems} />
                  </div>
                  <div className="flex justify-center my-2">
                    <button
                      onClick={() =>
                        history.push({
                          pathname: "/id=" + category?.id + "/q=",
                        })
                      }
                      className="bg-main text-white rounded-[5px] text-[18px] py-2 px-7"
                    >
                      Ählisi
                    </button>
                  </div>
                </div>
              )}
              {i !== 0 &&
                category?.CategoryItems?.length > 0 &&
                category?.CategoryItems[0].card_type === "string" && (
                  <div className="w-full my-5 min-h-fit">
                    <Title text={category?.name_tm} />
                    <div className="flex justify-evenly w-full my-2 flex-wrap">
                      {category?.CategoryItems?.map((item, j) => {
                        return (
                          <div
                            onClick={() =>
                              history.push({ pathname: "/item/" + item?.id })
                            }
                            key={"item" + j}
                            className="cursor-pointer leading-[62px] text-center my-2 px-4 whitespace-normal line-clamp-1   w-[45%] h-[62px] bg-[#f1f1f1] rounded-[10px] text-[18px] shadow-md"
                          >
                            {item?.name_tm}
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex justify-center mt-2">
                      <button
                        onClick={() =>
                          history.push({
                            pathname: "/id=" + category?.id + "/q=",
                          })
                        }
                        className="bg-main text-white rounded-[5px] text-[18px] py-2 px-7"
                      >
                        Ählisi
                      </button>
                    </div>
                  </div>
                )}
              {i !== 0 &&
                category?.CategoryItems?.length > 0 &&
                category?.CategoryItems[0].card_type === "card" && (
                  <div className="w-full my-5 min-h-fit">
                    <Title text={category?.name_tm} />
                    <div className="flex pl-[2%] justify-start gap-[2%] my-2 w-full flex-wrap">
                      {category?.CategoryItems?.map((item, j) => {
                        return (
                          <div
                            onClick={() =>
                              history.push({ pathname: "/item/" + item?.id })
                            }
                            key={"item" + j}
                            className="cursor-pointer rounded-[8px] my-[2%] min-w-[200px] w-[23%]  shadow-sm"
                          >
                            <img
                              className="w-full object-contain rounded-t-[8px] "
                              src={BASE_URL + item?.placeholder}
                              alt=""
                            />
                            <div className="mt-3">
                              <h1 className="text-[18px] m-0 p-0 text-black text-center">
                                {item?.name_tm}
                              </h1>
                              <p className="text-[16px] pb-2 m-0 p-0 text-black text-center">
                                {item?.year}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex justify-center mt-2">
                      <button
                        onClick={() =>
                          history.push({
                            pathname: "/id=" + category?.id + "/q=",
                          })
                        }
                        className="bg-main text-white rounded-[5px] text-[18px] py-2 px-7"
                      >
                        Ählisi
                      </button>
                    </div>
                  </div>
                )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;
