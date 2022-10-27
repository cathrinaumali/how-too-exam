import React from "react";
import { NavLink } from "react-router-dom";

import "./BottomNav.scss";

function BottomNav() {
  return (
    <section className="block fixed bottom-0 inset-x-0 z-50 shadow-lg text-white bg-gray-700 dark:bg-dark backdrop-blur-lg bg-opacity-30 dark:bg-opacity-30 dark:text-gray-400  border-royal/20">
      <div id="tabs" className="flex justify-between">
        <NavLink
          to="/"
          className="w-full m-5 focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 "
          activeClassName="dark:text-gray-100 text-black active"
        >
          <span class="tab text-xs uppercase hover:border-white">HOME</span>
        </NavLink>
        <NavLink
          exact
          to="/topic-1"
          className="w-full m-5 focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 "
          activeClassName="dark:text-gray-100 text-black active"
        >
          <span class="tab text-xs uppercase hover:border-white">TOPIC 1</span>
        </NavLink>
        <NavLink
          exact
          to="/topic-2"
          className="w-full m-5 focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 "
          activeClassName="dark:text-gray-100 text-black active"
        >
          <span class="tab text-xs uppercase hover:border-white">TOPIC 2</span>
        </NavLink>
        <NavLink
          exact
          to="/topic-3"
          className="w-full m-5 focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 "
          activeClassName="dark:text-gray-100 text-black active"
        >
          <span class="tab text-xs uppercase hover:border-white">TOPIC 3</span>
        </NavLink>
        <NavLink
          exact
          to="/topic-4"
          className="w-full m-5 focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 "
          activeClassName="dark:text-gray-100 text-black active"
        >
          <span class="tab text-xs uppercase hover:border-white">TOPIC 4</span>
        </NavLink>
        <NavLink
          exact
          to="/topic-5"
          className="w-full m-5 focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 "
          activeClassName="dark:text-gray-100 text-black active"
        >
          <span class="tab text-xs uppercase hover:border-white">TOPIC 5</span>
        </NavLink>
      </div>
    </section>
  );
}

export default BottomNav;
