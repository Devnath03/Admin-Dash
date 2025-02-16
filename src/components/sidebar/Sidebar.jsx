import React from 'react'
import "./sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import FilterFramesOutlinedIcon from '@mui/icons-material/FilterFramesOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import SystemSecurityUpdateGoodRoundedIcon from '@mui/icons-material/SystemSecurityUpdateGoodRounded';
import WebStoriesOutlinedIcon from '@mui/icons-material/WebStoriesOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Link} from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";



const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration: 'none'}}>
            <span className="logo">CLOTHING ADMIN</span>
            </Link>
            
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <Link to="/users/single" style={{textDecoration: 'none'}}>
                <li>
                    <PersonAddAltRoundedIcon className="icon" />
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/products/new" style={{textDecoration: 'none'}}>
                <li>
                    <ProductionQuantityLimitsOutlinedIcon className="icon" />
                    <span>Products</span>
                </li>
                </Link>
                <li>
                    <FilterFramesOutlinedIcon className="icon" />
                    <span>Orders</span>
                </li>
                <li>
                    <LocalPostOfficeOutlinedIcon className="icon" />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL LINKS</p>
                <li>
                    <QueryStatsOutlinedIcon className="icon" />
                    <span>Statics</span>
                </li>
                <li>
                    <NotificationsActiveRoundedIcon className="icon" />
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SystemSecurityUpdateGoodRoundedIcon className="icon" />
                    <span>System Health</span>
                </li>
                <li>
                    <WebStoriesOutlinedIcon className="icon" />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className="icon" />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountBoxIcon className="icon" />
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppIcon className="icon" />
                    <span>Logout</span>
                </li>

            </ul>
        </div>
        <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      
        </div>
    </div>

  )
}

export default Sidebar
