import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.con";
const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default initializeAuthentication;
