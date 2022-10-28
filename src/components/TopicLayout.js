import React from "react";
import "./TopicLayout.scss";
import { ReactComponent as LogoSvg } from "./../assets/logo.svg";
import { ReactComponent as ButtonSvg } from "./../assets/btn.svg";
import { Link } from "react-router-dom";
import BottomNav from "./BottomNav";

const TopicLayout = (props) => {
  return (
    <React.Fragment>
      <div
        className="container-fluid mx-auto home-container"
        id="topic-container"
      >
        <div className="grid grid-cols-7 min-h-screen">
          <div className="flex flex-col p-6 text-6xl border-1 border-gray-300 col-span-2 logo-col topic-logo-col">
            <div className="m-6 mt-4 logo-container">
              <Link to="/">
                <LogoSvg />
              </Link>
            </div>
            <div className="m-6 text-left	intro ">
              <h1 className="uppercase">lOREM iPSUM</h1>
              <h1 className=" uppercase">Dolor sit</h1>
            </div>
            <div className="mt-4 ml-6 text-left ">
              <Link to="/accordion">
                <ButtonSvg />
              </Link>
            </div>
          </div>
          <div
            className="col-span-5 w-full h-full bg-image-col bg-fixed bg-no-repeat bg-cover bg-center"
            style={props.bgImage}
          ></div>
        </div>
      </div>
      <BottomNav />
    </React.Fragment>
  );
};

export default TopicLayout;
