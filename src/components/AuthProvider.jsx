// import { createContext, useEffect, useState } from "react";
// import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import app from "../../firebase.config";
// ; // Make sure this points to your Firebase config

// export const AuthContext = createContext(null);

// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     useEffect(()=>{
//         const unsubscribe = onAuthStateChanged(auth,currentUser=>{
//             setUser(currentUser)
//         });
//         return ()=>{
//             return unsubscribe
//         }
//     },[])

//   // Sign in with Google
//   const signInWithGoogle = () => {
//     return signInWithPopup(auth, provider)
//   };
// //Google Login

// function googleLog(){
//     return signInWithPopup(auth,provider)
// }
// //Create with emil and pass

// function EmailPass(email,password){
//     return createUserWithEmailAndPassword(auth, email, password)
// }
// //Sign in with email password

// function signinEmailPass(email,password){
//     return signInWithEmailAndPassword(auth,email,password)
// }

//   const info = {
//     user,
//     signInWithGoogle, // expose the function
//     googleLog,
//     EmailPass,
//     signinEmailPass
//   };

//   return (
//     <AuthContext.Provider value={info}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
