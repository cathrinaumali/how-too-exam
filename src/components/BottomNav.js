import React from "react";
import { NavLink } from "react-router-dom";
import "./BottomNav.scss";

function BottomNav() {
  return (
    <section className="block fixed bottom-0 inset-x-0 z-50 shadow-lg text-white bg-gray-700 dark:bg-dark backdrop-blur-lg bg-opacity-30 dark:bg-opacity-30 dark:text-gray-400  border-royal/20">
      <div id="tabs" className="flex justify-between">
        <NavLink
          to="/home"
          className="w-full m-5 focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 "
          activeclassname="dark:text-gray-100 text-black active"
        >
          <div className="tab text-xs uppercase hover:border-white">
            <img src={`${require("./../assets/icon.png")}`} alt="Home icon" />
            <span>Home</span>
          </div>
        </NavLink>
        <NavLink
          to="/topic-1"
          className="w-full m-5 focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 "
          activeclassname="dark:text-gray-100 text-black active"
        >
          <div className="tab text-xs uppercase hover:border-white">
            TOPIC 1
          </div>
        </NavLink>
        <NavLink
          to="/topic-2"
          className="w-full m-5 focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 "
          activeclassname="dark:text-gray-100 text-black active"
        >
          <div className="tab text-xs uppercase hover:border-white">
            TOPIC 2
          </div>
        </NavLink>
        <NavLink
          to="/topic-3"
          className="w-full m-5 focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 "
          activeclassname="dark:text-gray-100 text-black active"
        >
          <div className="tab text-xs uppercase hover:border-white">
            TOPIC 3
          </div>
        </NavLink>
        <NavLink
          to="/topic-4"
          className="w-full m-5 focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 "
          activeclassname="dark:text-gray-100 text-black active"
        >
          <div className="tab text-xs uppercase hover:border-white">
            TOPIC 4
          </div>
        </NavLink>
        <NavLink
          to="/topic-5"
          className="w-full m-5 focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 "
          activeclassname="dark:text-gray-100 text-black active"
        >
          <div className="tab text-xs uppercase hover:border-white">
            TOPIC 5
          </div>
        </NavLink>
      </div>
    </section>
  );
}

export default BottomNav;
