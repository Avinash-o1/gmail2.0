import React from "react";
import { FiSquare } from "react-icons/fi";
import { RiArrowDownSFill } from "react-icons/ri";
import { CgInbox } from "react-icons/cg";
import { TbReload } from "react-icons/tb";
import { BsTag } from "react-icons/bs";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./Inbox.css";
import Emails from "./Emails";

const Inbox = () => {
  return (
    <div className="inbox">
      {/* icons-cont */}
      <div className="icons-cont">
        {/* left-side */}
        <div className="cont">
          <div className="square-btn">
            <FiSquare />
          </div>
          <div className="drop-btn">
            <RiArrowDownSFill />
          </div>
          <div className="circular-btn">
            <TbReload />
          </div>
          <div className="circular-btn">
            <BsThreeDotsVertical />
          </div>
        </div>
        {/* right-side */}
        <div className="cont">
          <div className="rect-btn">
            <p>1-50 of 999</p>
          </div>
          <div className="circular-btn">
            <MdKeyboardArrowLeft />
          </div>
          <div className="circular-btn">
            <MdKeyboardArrowRight />
          </div>
        </div>
      </div>
      <div className="emails-cont">
        {/* heading-cont */}
        <div className="heading-cont">
          <div className="sub-heading-cont current">
            <CgInbox />
            <p id="text">Primary</p>
          </div>
          <div className="sub-heading-cont">
            <BsTag />
            <p id="text">Promotions</p>
          </div>
          <div className="sub-heading-cont">
            <MdOutlinePeopleOutline />
            <p id="text">Social</p>
          </div>
        </div>
        {/* emails */}
        <Emails />
      </div>
    </div>
  );
};

export default Inbox;
