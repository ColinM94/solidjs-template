import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

import { MainLayout } from "./layouts";
import { HomePage, NotFoundPage } from "./pages";
import "./styles/index.scss";

const root = document.getElementById("root");

if (!root) throw "Root not found!";

render(
  () => (
    <Router root={MainLayout}>
      <Route path="/" component={HomePage} />
      <Route path="*paramName" component={NotFoundPage} />
    </Router>
  ),
  root
);
