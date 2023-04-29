import React from 'react'
import './LeftSidebar.css'

const Sidebtn = ({icon , title}) => {
  return (
    <div className='sidebtn'>
      <span className='icon'>{icon}</span>
      <p>{title}</p>
    </div>
  )
}

export default Sidebtn