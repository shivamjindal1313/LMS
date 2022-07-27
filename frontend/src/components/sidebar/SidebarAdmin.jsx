import './Sidebar.css';
import logo from '../../assets/Logo.png';
import app from '../../firebaseconfig';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const auth = getAuth();
const SidebarAdmin = ({ sidebarOpen, closeSidebar, setvalue }) => {
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
                    <a href="#" onClick={() => { setvalue(2) }} >SignUP superLady</a>
                </div>




                <div className="sidebar__logout" style={{ position: "absolute", bottom: "20px" }}>
                    <i className="fa fa-power-off"></i>
                    <a href="#" onClick={handleLogout}>Log out</a>
                </div>
            </div>
        </div>
    )
}
export default SidebarAdmin;