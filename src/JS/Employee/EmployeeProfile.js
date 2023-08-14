import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css/dist/js/materialize.min.js";
import '../BankCustomer/Customer.css'
import './EmployeeProfile.css';
import imagebank from './banklogo1.png';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function EmployeeProfile() {

  const [logoutMenu, setLogoutMenu] = useState([]);
  const [menu, setMenu] = useState([]);
  const [topMenu, setTopMenu] = useState([]);

//TopMenu Endpoint
  const handleTopMenu = () => {
    axios.get("https://localhost:7142/api/TopMenu").then((response) => {
      setTopMenu(response.data);
    })
  }

  //Menu Endpoint
  const handleMenu = () => {
    axios.get("https://localhost:7142/api/SideMenu").then((response) => {
      setMenu(response.data)
      console.log(response.data);
    })
  }

 //LogoutMenu Endpoint
  const handleLogoutMenu = () => {
    axios.get("https://localhost:7142/api/LogoutMenu").then((response) => {
      setLogoutMenu(response.data);
      console.log(response.data);
    })
  }


  useEffect(() => {
    M.AutoInit();
    handleTopMenu();
    handleMenu();
    handleLogoutMenu();
  }, [M.AutoInit()]);


  
  return (
    <div>
      <div id="div1">
        <div id="sidenav1" >
          <div >
            <img src={imagebank} id="banklogo" />
          </div>
          {/*<ul id="slide-out" class="sidenav">*/}
          <br />
          <div id="icon1">
            <div id="icondashboard"><i class="small material-icons">dashboard</i></div>
            <div><h4 id="dashboard">Dashboard</h4></div>
          </div>
          <ul class="collapsible">
            {menu.filter((datalink) => ((datalink.parentId == 0) && (datalink.menuStatus == "yes") && (datalink.menuURL == ""))).map((datalink, index) => (
              <li key={index}>
                <div class="collapsible-header"><i class="material-icons" id="icons">{datalink.menuIcon}</i>{datalink.menuTitle}</div>
                <div class="collapsible-body">
                  <ul class="collapsible">
                    {menu.filter((menuitem) => ((menuitem.parentId == datalink.id) && (menuitem.menuStatus == "yes") && (menuitem.menuURL == ""))).map((menuitem, index) => (
                      <li key={index}>
                        <div class="collapsible-header"><i class="material-icons" id="icons">{menuitem.menuIcon}</i>{menuitem.menuTitle}</div>
                        <div class="collapsible-body">
                          {menu.filter((subMenuitem) => (subMenuitem.parentId == menuitem.id) && (subMenuitem.menuStatus == "yes") && (subMenuitem.menuURL !== "")).map((subMenuitem, index) => (
                            <div id="submenudiv" key={index}>
                              <ul>
                                <Link to={`/${subMenuitem.menuURL}`}><li  id="subMenulist"> <div id="subMenudiv"><i class="material-icons" id="submenuicon">{subMenuitem.menuIcon}</i>{subMenuitem.menuTitle}</div></li> </Link>
                              </ul>
                            </div>
                          ))}
                        </div>
                      </li>
                    ))}


                    {menu.filter((menuitems) => ((menuitems.parentId == datalink.id) && (menuitems.menuStatus == "yes") && (menuitems.menuURL !== ""))).map((menuitems, index) => (
                      <li key={index}>
                        <Link to={`/${menuitems.menuURL}`}> <div class="collapsible-header"><i class="material-icons" id="icons">{menuitems.menuIcon}</i>{menuitems.menuTitle}</div></Link>
                        <div class="collapsible-body">
                          {menu.filter((subMenuitems) => (subMenuitems.parentId == menuitems.id) && (subMenuitems.menuStatus == "yes") && (subMenuitems.menuURL !== "")).map((subMenuitems, index) => (
                            <div id="submenudiv" key={index}>
                              <ul>
                                <li  id="subMenulist"> <div id="subMenudiv"><i class="material-icons" id="submenuicon">{subMenuitems.menuIcon}</i>{subMenuitems.menuTitle}</div></li>
                              </ul>
                            </div>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>


        {/*TopNav bar*/}
        <div className="container1">

          {/*Profile Popup*/}
          <ul id="dropdown1" class="dropdown-content">
            {logoutMenu.map((logoutitem) => (
              <li key={logoutitem.id}><a href={logoutitem.logoutMenuURL}>{logoutitem.menuDescription}</a></li>

            ))}
          </ul>
         {/*TopNav Menu*/}
          <nav id="nav1">
            <div class="nav-wrapper">
              <a class="brand-logo"></a>
              <ul id="nav-mobile" >
                {topMenu.filter((menulist) => menulist.menuTitle !== null).map((menulist,index) => (
                  <li key={index} id="toplist"><a href="" id="li1">{menulist.menuTitle}</a></li>
                ))}
                {topMenu.filter((menulists) => menulists.menuIcon !== null).map((menulists,index) => (
                  <li key={index} id="toplist"><a class="dropdown-trigger" href="#!" data-target="dropdown1"><i class="material-icons" id="profile">{menulists.menuIcon}</i></a></li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}





