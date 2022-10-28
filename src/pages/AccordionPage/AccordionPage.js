// libraries
import React from "react";
import "./Accordion.scss";
import AccordionComponent from "./AccordionComponent";
import { ReactComponent as NextSvg } from "./../../assets/next.svg";
import { ReactComponent as BackSvg } from "./../../assets/back.svg";

const AccordionPage = () => {
  return (
    <div className="container-fluid mx-auto accordion-parent-container bg-image-col bg-fixed bg-no-repeat bg-cover bg-center relative">
      <div className="grid grid-cols-7 min-h-screen">
        <div
          className="grid col-span-2 p-6 text-6xl border-1 border-gray-300 logo-col"
          id="accordion-page-left"
        >
          <div className="text-left	intro ">
            <h1 className="uppercase first">Nulla </h1>
            <h1 className="mb-4 uppercase second"> imperdiet</h1>
            <p className="mb-4 sub-header">
              Nulla imperdiet Vestibulum dapibus hendrerit nibh ut ornare. vitae
              nisl elit.
            </p>
            <p className="mb-4  content">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              eu leo elit. Donec condimentum odio ut ante bibendum, quis egestas
              quam semper.
            </p>
          </div>
        </div>
        <div className="grid col-span-5 w-full h-full bg-image-col bg-fixed bg-no-repeat bg-cover bg-center">
          <div className="grid grid-cols-7">
            <div className="col-span-3 accordion-container ">
              <h1>Montserrat</h1>
              <AccordionComponent />
            </div>
          </div>
        </div>
      </div>
      <div className="back-next-btn-container absolute flex flex-row">
        <BackSvg onClick={()=>window.history.go(-1)}/>
        <NextSvg onClick={()=>window.history.go(+1)}/>
      </div>
    </div>
  );
};
export default AccordionPage;
