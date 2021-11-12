import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const intializeAuthentication=()=>{
    initializeApp(firebaseConfig);
}
export default intializeAuthentication;