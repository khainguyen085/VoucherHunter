import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import routes from "./routes/index";

const App = () => {
  const { user } = useSelector((state) => state.auth);
  const role = user ? "user" : "guest";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes[role].withLayout.map((route) => (
            <Route path={route.path} element={<route.component />} />
          ))}
        </Route>

        {routes[role].withoutLayout.map((route) => (
          <Route path={route.path} element={<route.component />} />
        ))}lfg;pkvdvfbkg.e
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
