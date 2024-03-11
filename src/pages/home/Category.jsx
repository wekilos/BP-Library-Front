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
  const [filter, setFilter] = useState({ page: 1, limit: 20 });
  const [ismore, setIsmore] = useState(true);

  useEffect(() => {
    getCategories();
  }, [id, q, filter]);

  const getCategories = () => {
    setLoading(true);
    let search_query = q && q?.length > 0 ? q.slice(2) : "";
    console.log(search_query);
    axiosInstance
      .get("/api/category/" + id?.slice(3), {
        params: {
          search_query: search_query,
          page: filter.page,
          limit: filter.limit,
        },
      })
      .then((data) => {
        console.log(data.data);
        if (filter.page > 1) {
          let oldData = categories.CategoryItems;
          let newArr = oldData.concat(data?.data?.CategoryItems);
          setCategories({ ...categories, CategoryItems: newArr });
          data?.data?.CategoryItems?.length > 0
            ? setIsmore(true)
            : setIsmore(false);
        } else {
          setCategories(data.data);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const getMore = () => {
    setFilter({ ...filter, page: filter.page + 1 });
  };

  return (
    <div className="w-full">
      {loading ? (
        <PageLoading />
      ) : (
        <div>
          {categories?.CategoryItems?.length > 0 &&
            categories?.CategoryItems[0].card_type === "string" && (
              <div className="w-full my-5 min-h-fit">
                <Title text={categories?.name_tm} />
                <div className="flex justify-evenly w-full my-2 flex-wrap">
                  {categories?.CategoryItems?.map((item, j) => {
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
                  {ismore && (
                    <button
                      onClick={() => getMore()}
                      className="bg-main text-white rounded-[5px] text-[18px] py-2 px-7"
                    >
                      Dowamy
                    </button>
                  )}
                </div>
              </div>
            )}
          {categories?.CategoryItems?.length > 0 &&
            categories?.CategoryItems[0].card_type === "card" && (
              <div className="w-full my-5 min-h-fit">
                <Title text={categories?.name_tm} />
                <div className="flex pl-[2%] justify-start gap-[2%] my-2 w-full flex-wrap">
                  {categories?.CategoryItems?.map((item, j) => {
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
                  {ismore && (
                    <button
                      onClick={() => getMore()}
                      className="bg-main text-white rounded-[5px] text-[18px] py-2 px-7"
                    >
                      Dowamy
                    </button>
                  )}
                </div>
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default Home;
