import React from 'react'
import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebarsuperlady";
import Main from "../components/main/mainSuperlady"
import { app } from '../../src/firebaseconfig'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

const auth = getAuth();
const dbRef = ref(getDatabase());

const User = () => {
  const navigate = useNavigate()
  const [superLady, setSuperLady] = useState(null)
  const [superLadyUID,setUID] = useState(null)
  const [error, setError] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [value, setValue] = useState(0);
  const closeSidebar = () => {
    setSidebarOpen(false)
  }
  const checkUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUID(user.uid)
        console.log(uid);
        get(child(dbRef, `srujna/superlady_panel/${uid}`)).then((snapshot) => {
          if (snapshot.exists()) {
            setSuperLady(snapshot.val());
            console.log(snapshot.val());
          } else {
            setError("U are not superlady");
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
      } else {
        navigate('/')
        console.log('user is signed out')
      }
    });
  }
  useEffect(() => {
    checkUser()
  }, [])
  return (
    <div className="container">
      {/* <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/> */}
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} setvalue={setValue} 
      uid={superLadyUID}
      />
      <Main value={value} />
    </div>
  )
}

export default User
