import React from 'react'
import { BiStar } from "react-icons/bi";
import {CgInbox} from 'react-icons/cg';
import {FiClock} from 'react-icons/fi'
import {TbSend} from 'react-icons/tb'
import {BiPencil} from 'react-icons/bi'
import {MdDrafts} from 'react-icons/md'
import {BsPlusLg} from 'react-icons/bs'
import {MdOutlineKeyboardArrowDown } from 'react-icons/md'
import './LeftSidebar.css'
import Sidebtn from './Sidebtn';

const LeftSidebar = () => {

    const buttons = [
        { icon: <CgInbox />, title: "Inbox" },
        { icon: <BiStar />, title: "Starred" },
        {
          icon: <FiClock />,
          title: "Snoozed",
        },
        { icon: <TbSend />, title: "Sent" },
        { icon: <MdDrafts />, title: "Drafts" },
        { icon: <MdOutlineKeyboardArrowDown />, title: "More" },
      ];

  return (
    <div className='left-sidebar-cont'>
        {/* compose */}
        <div className='compose-cont'>
            <div>
                <BiPencil className='logo'/>
            </div>
            <p className='text'>Compose</p>
        </div>
        {/* sidebtns */}
        <div className='sidebtn-cont'> 
        {buttons.map((button) => (
          <Sidebtn icon={button.icon} title={button.title} />
        ))}
        </div>
        {/* labels */}
        <div className='labels-cont'>
            <p>Labels</p>
            <span><BsPlusLg/></span>
        </div>
    </div>
  )
}

export default LeftSidebar