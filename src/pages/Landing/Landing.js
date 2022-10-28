// libraries
import React from "react";
import "./Landing.scss";
import { ReactComponent as LogoSvg } from "./../../assets/logo.svg";
import { ReactComponent as HandIcon } from "./../../assets/icon-prompt.svg";
import { ReactComponent as GlobeImage } from "./../../assets/globe.svg";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <React.Fragment>
      <div className="container-fluid mx-auto landing-container">
        <div className="grid grid-cols-4 min-h-screen">
          <div className="flex flex-col col-span-2 left">
            <div className="col mx-auto">
              <h1>LOREM IPSUM</h1>
            </div>
            <div className="col mx-auto">
              <LogoSvg />
            </div>
            <div className="col mx-auto flex content-center items-center">
              <span>
                <HandIcon />
              </span>
              <p>
                {" "}
                Click <Link to="/home">begin</Link> to get started.
              </p>
            </div>
          </div>
          <div className="grid col-span-2 right">
            <GlobeImage />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Landing;
