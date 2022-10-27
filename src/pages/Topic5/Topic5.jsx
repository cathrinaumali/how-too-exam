// libraries
import React from "react";
import "./Topic5.scss";
import { ReactComponent as LogoSvg } from "./../../assets/logo.svg";
import Layout from "../../components/Layout";

const Topic5 = () => {
  return (
    <Layout>
      <div className="grid p-6 text-6xl border-1 border-gray-300 col-span-2 logo-col">
        <div className="mx-auto mt-4 logo-container">
          <LogoSvg />
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
      <div className="col-span-5 w-full h-full bg-image-col bg-fixed bg-no-repeat bg-cover bg-center"></div>
    </Layout>
  );
};
export default Topic5;
