import Signup from "../../views/SignupsuperLady"
import SendCourses from "../../components/sendCourses_women"
import MainComp from "../mainAdmin/Mainsuperlady"

const Main = ({ value }) => {
    return (
        <div style={{ overflowY: "scroll" }}>
            {value === 0 ? <div><MainComp /></div> : value === 1 ? <div><SendCourses /></div> : <div><Signup /></div>}
        </div>
    )
}

export default Main;