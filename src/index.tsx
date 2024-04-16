import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

import { MainLayout } from "./layouts";
import { FlashCardPage, HomePage, LoginPage, NotFoundPage } from "./pages";
import "./styles/global.scss";

const root = document.getElementById("root");

if (!root) throw "Root not found!";

render(
  () => (
    <Router root={MainLayout}>
      <Route path="/" component={HomePage} />
      <Route path="login" component={LoginPage} />
      <Route path="*paramName" component={NotFoundPage} />
      <Route path="card" component={FlashCardPage} />
    </Router>
  ),
  root
);
