import React from 'react'
import { useState } from "react";
import SidebarAdmin from "../components/sidebar/SidebarAdmin";
import Main from "../components/main/MainAdmin"

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [value, setValue] = useState(0);

  const closeSidebar = () => {
    setSidebarOpen(false)
  }
 
  return (
    <div className="container">
      {/* <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/> */}
      <SidebarAdmin sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} setvalue={setValue} />
      <Main value={value}/>
    </div>
  )
}

export default Admin
