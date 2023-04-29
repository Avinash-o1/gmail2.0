import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { GoSettings } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import {BsQuestionCircle} from 'react-icons/bs'
import {FcSettings} from 'react-icons/fc'
import {TbGridDots} from 'react-icons/tb'
import { logo } from "../../assets/images";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="outer-cont">
      <div className="inner-cont1">
        {/* left side */}
        <div className="ham-menu-cont btn">
          <IoMenuOutline id="ham-menu" />
        </div>
        <div className="logo-cont">
          <div className="img-cont">
            <img src={logo.gmail} alt="" id="gmail-logo"></img>
          </div>
          <p>Gmail</p>
        </div>
      </div>
      <div className="inner-cont2">
        <div className="centre-cont">
          <div className="serachbar-cont">
            <input type="search" placeholder="Search mail" />
          </div>
          <span className="search-btn-cont btn">
            <FiSearch className="search-btn"></FiSearch>
          </span>
          <span className="cntrl-btn-cont btn">
            <GoSettings className="cntrl-btn" />
          </span>
        </div>
        <div className="right-side-cont">
          <div className="icons btn">
            <BsQuestionCircle className="icon"/>
          </div>
          <div className="icons btn">
            <FcSettings className="icon"/>
          </div>
          <div className="icons btn">
            <TbGridDots className="icon"/>
          </div>
          <div>
            <img src={logo.profile} alt="" id="profile"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
