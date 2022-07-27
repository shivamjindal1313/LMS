import React from 'react'
import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main"

const User = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false)
  }
 
  return (
    <div className="container">
      {/* <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/> */}
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
      <Main />
    </div>
  )
}

export default User
