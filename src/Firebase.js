import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyDJ4o98pddreaLRx4eootGB02QUO9CNiFc",
  authDomain: "netflix-f0357.firebaseapp.com",
  projectId: "netflix-f0357",
  storageBucket: "netflix-f0357.firebasestorage.app",
  messagingSenderId: "947509249135",
  appId: "1:947509249135:web:8c514f3507d0dd8ee1799a"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signup=async (name,email,password)=>{
try{
    const res=await createUserWithEmailAndPassword(auth,email,password);
    const user
=res.user;
await addDoc(collection(db,"user"),{
    uid:user.uid,
    name,
    authProvider:"local",
    email
})
}catch(error){
console.log(error);
toast.error(error.code.split('/')[1].split('-').join(" "))

}
}

const login=async (email,password)=>{
try{
    await signInWithEmailAndPassword(auth,email,password)
}catch(error){
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
}
}

const logout=()=>{
    signOut(auth)
}

export {auth,db,login,signup,logout}; 