import React from "react";
import "./BottomNav.scss";
import BottomNav from "./BottomNav";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="container-fluid mx-auto home-container">
        <div className="grid grid-cols-7 min-h-screen">{props.children}</div>
      </div>
      <BottomNav />
    </React.Fragment>
  );
};

export default Layout;
