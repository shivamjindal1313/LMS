import './Sidebar.css';
import logo from '../../assets/Logo.png';
import react, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, set, update } from "firebase/database";
import { useNavigate } from 'react-router-dom';
const auth = getAuth();

const SidebarAdmin = ({ sidebarOpen, closeSidebar, setvalue ,uid }) => {
    const [show, setShow] = useState(false);
    const [noti, setNoti] = useState("")


function writeUserData() {
    console.log(uid)
  const db = getDatabase();
  update(ref(db, 'srujna/superlady_panel/' + uid), {
    campaign: noti
  });
  handleClose()
}

    const handleClose = () => {
        setShow(false);
        console.log(noti);
    }
    const handleShow = () => {
        setShow(true);
    }
    const navigate = useNavigate()
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/');
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className={sidebarOpen ? 'sidebar-responsive' : ''} id="sidebar">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Offline Campaigns</Modal.Title>
                </Modal.Header>
                <Modal.Body><input
                            onChange={(e)=>{setNoti(e.target.value)}}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            value={noti}
                            placeholder="Enter Campaign details" /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} style={{color: "black"}}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={writeUserData} style={{color: "black"}}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className='sidebar__title'>
                <div className='sidebar__img'>
                    <img src={logo} alt="logo" />
                    <h1>Srujna</h1>
                </div>

                <i
                    onClick={() => closeSidebar()}
                    className="fa fa-times"
                    id="sidebarIcon"
                    aria-hidden="true"
                ></i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-minus-square"></i>
                    <a href="#" onClick={() => { setvalue(0) }}>Home</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#" onClick={() => { setvalue(1) }} >Send Courses</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#" onClick={() => { setvalue(2) }} >SignUP Women</a>
                </div>
                <div className="sidebar__link mb-5">
                    <i className="fa fa-tachometer"></i>
                    <a href="#" onClick={handleShow} >Send Notification</a>
                </div>
                <div className="sidebar__logout" style={{ }}>
                    <i className="fa fa-power-off"></i>
                    <a href="#" onClick={handleLogout}>Log out</a>
                </div>
            </div>

        </div>
    )
}
export default SidebarAdmin;