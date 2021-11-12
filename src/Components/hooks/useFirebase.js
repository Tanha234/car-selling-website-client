import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged ,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import intializeAuthentication from "../../Firebase/Firebase.init";
intializeAuthentication()
const useFirebase=()=>{
//     const [user,setUser]=useState({})
    const googleProvider = new GoogleAuthProvider();
//     const auth = getAuth();

    
//     const signInWithGoogle=()=>{
//         signInWithPopup(auth, googleProvider)
//             .then(result => {
//                 setUser(result.user);
//             })
//     }






const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();
    const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }
        const signInWithGoogle=()=>{
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
    }
    const loginUser = (email, password) => {
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');

            })
            .catch((error) => {
                setAuthError(error.message)

            })
            .finally(() => setIsLoading(false));

    }

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);

        });
        return () => unsubscribe;
    }, [])


    const logout = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));

    }


    return {
        user,
        isLoading,
        registerUser,
        logout,
        loginUser,
        authError,
        signInWithGoogle
    }

}



export default useFirebase;