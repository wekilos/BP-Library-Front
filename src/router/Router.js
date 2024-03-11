import { React, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageLoading from "../components/PageLoading";

import { Category, Home, Item } from "../pages/index";

import ScrollIntoView from "./ScrollIntoView";

const PrivateRoute = lazy(() => import("./PrivateRoute"));
// const PublicRoute = lazy(() => import("./PublicRoute"));
const App = () => {
  return (
    <BrowserRouter>
      <ScrollIntoView>
        <Suspense fallback={<PageLoading />}>
          <Switch>
            <PrivateRoute restricted={true} component={Home} path="/" exact />
            <PrivateRoute
              restricted={true}
              component={Item}
              path="/item/:id"
              exact
            />
            <PrivateRoute restricted={true} component={Home} path="/:q" exact />
            <PrivateRoute
              restricted={true}
              component={Category}
              path="/:id/:q"
              exact
            />

            <PrivateRoute restricted={true} component={Home} path="*" exact />
          </Switch>
        </Suspense>
      </ScrollIntoView>
    </BrowserRouter>
  );
};

export default App;
