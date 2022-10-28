// libraries
import React from "react";
import "./Accordion.scss";
import { ReactComponent as LogoSvg } from "./../../assets/logo.svg";
import Layout from "../../components/Layout";
import AccordionComponent from "./AccordionComponent";

const AccordionPage = () => {
  return (
    <Layout>
      <div className="grid p-6 text-6xl border-1 border-gray-300 col-span-2 logo-col">
        <div className="text-left	intro ">
          <h1 className="mb-4">Nulla imperdiet</h1>
          <p className="mb-4">
            Nulla imperdiet Vestibulum dapibus hendrerit nibh ut ornare. vitae
            nisl elit.
          </p>
          <p className="mb-4 ml-2">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eu leo elit. Donec condimentum odio ut ante bibendum, quis egestas
            quam semper.
          </p>
        </div>
      </div>
      <div className="col-span-5 w-full h-full bg-image-col bg-fixed bg-no-repeat bg-cover bg-center">
        <div className="grid grid-cols-7">
          <div className="col-span-3">
            <AccordionComponent />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default AccordionPage;
