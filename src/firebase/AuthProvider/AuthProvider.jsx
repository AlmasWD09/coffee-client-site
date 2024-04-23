import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from "../Firebase.config";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
 

    // Google Login
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    // Github Login
    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

    // Sign in 
    const creatUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // Sign Out
    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // LogOut
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    // Update userProfile
    const updateUser = (name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          });
    }


    // obserber
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setLoading(false)
            setUser(currentUser)
        })
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = {
       user,
       creatUser,
       logIn,
       logOut,
       updateUser,
       loading,
       googleLogin,
       githubLogin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
  };
export default AuthProvider;