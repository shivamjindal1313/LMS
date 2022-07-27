import './Sidebar.css';
import logo from '../../assets/Logo.png';
import react, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { app } from '../../firebaseconfig'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const auth = getAuth();

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    const navigate = useNavigate()
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/');
        }).catch((error) => {
            // An error happened.
        });
    }
    const [show, setShow] = useState(false);
    const [noti, setNoti] = useState("No Notification currently");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let name = "Shikha"
    return (
        <div className={sidebarOpen ? 'sidebar-responsive' : ''} id="sidebar">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Offline Campaigns</Modal.Title>
                </Modal.Header>
                <Modal.Body>{noti}.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} style={{ color: "black" }}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose} style={{ color: "black" }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className='sidebar__title'>
                <div className='sidebar__img'>
                    <img src={logo} alt="logo" />
                    <h1>{name}</h1>
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
                    <a href="#">Home</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#" onClick={handleShow} >Notifications</a>
                </div>



                <div className="sidebar__logout" style={{ position: "absolute", bottom: "20px" }}>
                    <i className="fa fa-power-off"></i>
                    <a href="#" onClick={handleLogout}>Log out</a>
                </div>
            </div>

        </div>
    )
}
export default Sidebar;