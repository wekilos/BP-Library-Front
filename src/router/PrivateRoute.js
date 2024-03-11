import React, { Suspense } from "react";
import { Route, useHistory } from "react-router-dom";
import { isLogin } from "../utils/index";
import PageLoading from "../components/PageLoading";
import Sidebar from "../components/sidebar";

const Headers = React.lazy(() => import("../components/Header"));

const PrivateRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() || true ? (
          <div className="w-full ">
            <Suspense fallback={<PageLoading />}>
              <div className="min-h-[10vh]">
                <Headers />
              </div>
            </Suspense>
            <div className="w-full flex justify-between h-[90vh]">
              <div className="w-[23%] min-w-[300px] bg-[#F7F8FA] border-r-[1px] border-[#efefef] h-[90vh] overflow-y-auto scrollbar-hide">
                <Suspense fallback={<PageLoading />}>
                  <Sidebar />
                </Suspense>
              </div>
              <div
                className="bg-[#F7F8FA] max-w-[77%]  w-[77%] h-[90vh] overflow-y-auto scrollbar-hide  p-[30px]"
                style={{
                  // width: "90%",
                  minHeight: "90vh",
                  margin: "0 auto",
                }}
              >
                <Component {...props} />
              </div>
            </div>
          </div>
        ) : (
          history.push({ pathname: "/" })
        )
      }
    />
  );
};

export default PrivateRoute;
