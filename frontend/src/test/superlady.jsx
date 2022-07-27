import {useState,useEffect} from 'react'
import { app } from '../firebaseconfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, child, get } from "firebase/database";
import SignupUser from '../views/SignupUser';

const auth = getAuth();
const dbRef = ref(getDatabase());



const Superlady = () => {
    const navigate = useNavigate()
    const [superLady , setSuperLady] = useState(null)
    const [error , setError] = useState("")
    const checkUser= () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
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
    useEffect(()=>{
        checkUser()
    },[])
  return (
    <div>
        <p className='text-rose-600'>{error}</p>
        {
            superLady ? 
            <>
                <p>{superLady.name}</p>
                <SignupUser superLady = {superLady}/>
            </>
            :
            ""
        }
    </div>
  )
}

export default Superlady