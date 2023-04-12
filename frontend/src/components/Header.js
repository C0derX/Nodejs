import React,{useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
const Header = ()=>{
    const [activeTab, setActiveTab]= useState("Home");
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname==="/"){
            setActiveTab("Home")
        }
        else if(location.pathname === "/add"){
            setActiveTab("AddUser")
        }
        else if(location.pathname==="/about"){
            setActiveTab("About")
        }
       
    },[location])
    return(
        <div className="navv">
        <header className="header">
            <div className="logo"><a href="/"><img className="ico" src="/logo192.png" alt="React App" /></a><p>Simple React App</p></div>
            <div className="check" id="check">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className="nav-bar">
                <ul>
                    <li> <Link to="/"><p
                    className={`${activeTab=== "Home" ? "active":""}`}
                    onClick={()=> setActiveTab("Home")}
                    >Home</p> </Link> </li>
                    <li>
                    <Link to="/add"><p
                    className={`${activeTab=== "AddUser" ? "active":""}`}
                    onClick={()=> setActiveTab("AddUser")}
                    >AddUser</p> </Link>
                    </li>
                    <li><Link to="/about"><p
                    className={`${activeTab=== "About" ? "active":""}`}
                    onClick={()=> setActiveTab("About")}
                    >About</p> </Link></li>
                </ul>
            </nav>
        </header>

    </div>
    );
}

export default Header;