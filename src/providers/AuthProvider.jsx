import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Creating User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // SignIn User
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(email, password);
    }

    // Sign Out
    const logout = () => {
        setLoading(true);
        return singnOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Current User:', currentUser);
            setLoading(false);
        });
        return () => {
            return unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;