import { Heart, HeartCrack, HeartIcon, Home, HomeIcon } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
      <Footer />
    </>
  );
};

export default Sidebar;

const DesktopSidebar = () => {
  return (
    <div className="p-3 bg-base-200 md:p-10 min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full flex items-center justify-center">
          <p className="py-3 w-full text-center text-xl px-5 shadow-lg bg-base-300 font-bold rounded-full hidden md:block">
            COOK <span className="text-error">i</span>T
          </p>
          <p className="p-3 bg-base-300 rounded-full block md:hidden">
            <span className="bg-base-100 p-2 rounded-full block"></span>
          </p>
        </div>
        <ul className="uppercase tracking-wide flex flex-col items-center md:items-start gap-8">
          <NavLink to={"/"} className={({isActive}) => `flex gap-1 hover:text-error ${isActive ? 'text-error': ''}`}>
            <Home size={24} />
            <span className="font-bold hidden md:block">Home</span>
          </NavLink>
          <NavLink to={"/favorites"} className={({isActive}) => `flex gap-1 hover:text-error ${isActive ? 'text-error': ''}`}>
            <Heart size={24} />
            <span className="font-bold hidden md:block">Favorites</span>
          </NavLink>
        </ul>
        {/* <div id="edamam-badge" data-color="white"></div> */}
      </div>
    </div>
  );
};

const MobileSidebar = () => {
  return (
    <div className="flex justify-center gap-10 fixed w-full bottom-0 left-0 bg-base-200 z-10 py-4 sm:hidden">
      <NavLink to={"/"} className={({isActive}) => ` ${isActive ? 'text-error': ''}`}>
        <HomeIcon size={24} />{" "}
      </NavLink>
      <NavLink to={"/favorites"} className={({isActive}) => ` ${isActive ? 'text-error': ''}`}>
        <HeartIcon size={24} />{" "}
      </NavLink>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-2 hidden sm:block fixed z-10 bottom-0 left-0">
      <aside>
        <p className="text-xs">
          Copyright © {new Date().getFullYear()} - All right reserved by RvNd
        </p>
      </aside>
    </footer>
  );
};
