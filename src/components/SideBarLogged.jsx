import { useState } from 'react';
import { BsArrowBarRight, BsArrowBarLeft, BsFlower1, BsFillHouseHeartFill } from "react-icons/bs";
import { TbLetterS, TbLetterA, TbLetterK, TbLetterU, TbLetterR, } from "react-icons/tb";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiArrowGoBackLine } from 'react-icons/ri';

import '../components/styleSheet/SideBar.css';

const options = [
{
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,
  }
];


function SideBar() {
    const [collapsed, setCollapsed] = useState(true);

    const handleToggleSidebar = () => {
      setCollapsed(!collapsed);
    };


  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        {/* <img src="src/assets/logo.png" alt="logo" />  */}
        <div className="sidebar-collapse">
      {collapsed ? (
        <BsArrowBarRight
          className="sidebar-toggle"
          onClick={handleToggleSidebar}
        />
      ) : (
        <BsArrowBarLeft
          className="sidebar-toggle"
          onClick={handleToggleSidebar}
        />
      )}
    </div>
    <div className="sidebar-menu">
      <ul>
      <li>
          <a href="/">
          <RiArrowGoBackLine className="sidebar-icon"/> 
            {!collapsed && <span className="sidebar-text"> Homepage </span>}
          </a>
        </li>
        <div className="first-block"> 
      <li>
          <a href="#">
          <BsFlower1 className="sidebar-icon"/> 
            {!collapsed && <span className="sidebar-text"> New Season </span>}
          </a>
        </li>
        <li>
          <a href="#">
            <TbLetterS className="sidebar-icon" />
            {!collapsed && <span className="sidebar-text"> Full-set Kimono</span>}
          </a>
        </li>
        <li>
          <a href="#">
            <TbLetterA className="sidebar-icon" />
            {!collapsed && <span className="sidebar-text"> Yukata </span>}
          </a>
        </li>
        <li>
          <a href="#">
            <TbLetterK className="sidebar-icon" />
            {!collapsed && <span className="sidebar-text"> Haori </span>}
          </a>
        </li>
        <li>
          <a href="#">
            <TbLetterU className="sidebar-icon" />
            {!collapsed && <span className="sidebar-text"> Accesorries </span>}
          </a>
        </li>
        <li>
          <a href="#">
            <TbLetterR className="sidebar-icon" />
            {!collapsed && <span className="sidebar-text"> Footwear </span>}
          </a>
        </li>
        <li>
          <a href="#">
            <TbLetterA className="sidebar-icon" />
            {!collapsed && <span className="sidebar-text"> Sleepwear </span>}
          </a>
        </li>
       
        </div>
        <div className="second-block"> 
        <li>
          <a href="/userProfile">
            <BsFillHouseHeartFill className="sidebar-icon" />
            {!collapsed && <span className="sidebar-text"> Your profile </span>}
          </a>
        </li>
        <li>
          <a href="/admDashboard">
            <MdOutlineDashboardCustomize className="sidebar-icon" />
            {!collapsed && <span className="sidebar-text"> Dashboard </span>}
          </a>
        </li>
        </div>
      </ul>
    </div>
  </div>
);
}


function Example() {
    return (
      <>
        {options.map((props, idx) => (
          <SideBar key={idx} {...props} />
        ))}
      </>
    );
  }

export default Example;