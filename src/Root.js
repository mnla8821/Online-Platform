import { useSelector } from "react-redux";
import Header from "./Sections/Header/Header";
import Cookies from "js-cookies";

import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Sections/Footer/Footer";

const Root = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const [data, setData] = useState();
  useEffect(() => {
    const darkIconPath = `${process.env.PUBLIC_URL}/bw - Copy.png `;
    const lightIconPath = `${process.env.PUBLIC_URL}/logo-light.png`;
    isDark ? setData(darkIconPath) : setData(lightIconPath);
  }, [isDark]);
  console.log(typeof Cookies.getItem("user_id"));
  return (
    <div className="App">
      <Helmet>
        <link rel="icon" type="image/png" href={data} sizes="80x80" />
      </Helmet>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
