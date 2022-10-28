// libraries
import React from "react";
import "./Home.scss";
import { ReactComponent as LogoSvg } from "./../../assets/logo.svg";
import Layout from "./../../components/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout IDName={"home-1-container"}>
      <div
        className="flex flex-col col-span-2 p-6 text-6xl border-1 border-gray-300  logo-col"
        id="hm"
      >
        <div className="mx-auto logo-container">
          <Link to="/">
            <LogoSvg />
          </Link>
        </div>
        <div className="text-left	intro ">
          <h1 className="mb-4">lOREM iPSUM</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vitae nisl elit.
          </p>
          <p className="mb-4">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eu leo elit. Donec condimentum odio ut ante bibendum, quis egestas
            quam semper.
          </p>
          <p className="mb-4">
            Donec tempus cursus magna a feugiat. Morbi scelerisque euismod
            aliquet. Integer ut euismod risus. Aenean a diam vel nisl accumsan
            cursus.
          </p>
          <p className="mb-4">
            {" "}
            Quisque ac dapibus nisl. Etiam rhoncus aliquet ligula ac convallis.
            Ut eleifend sit amet justo eu laoreet.
          </p>
        </div>
      </div>
      <div className="grid col-span-5 w-full h-full bg-image-col bg-fixed bg-no-repeat bg-cover bg-center"></div>
    </Layout>
  );
};
export default Home;
