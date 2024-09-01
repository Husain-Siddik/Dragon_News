import { defineStore } from "pinia";
// everywhere use
import auth from "@/firebase/firebase.config";

import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";

const Googleprovider = new GoogleAuthProvider();


export const UseAuthStore = defineStore('AuthStore', {
    state: () => ({
        regname: '',
        regPhoto: '',
        typedEmail: "",
        typedPass: '',
        Loginuser: '',
        sucessToaser: '',
        ErorrToaster: '',


    }),
    actions: {
        GoogleSignIn() {

            signInWithPopup(auth, Googleprovider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    // The signed-in user info.
                    const user = result.user;
                    this.Loginuser = user
                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
                  
                    this.sucessToaser = true
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error);
                    this.ErorrToaster = true
                  

                    // ...
                }).finally(() => {
                    
                    setTimeout(() => {
                        this.ErorrToaster = false
                        this.sucessToaser = false
                    }, 2000);
                })


        },
        HandelSignOut() {
            signOut(auth).then(() => {
                // Sign-out successful.
                console.log('sign out succesfull');


                this.Loginuser = ""
            }).catch((error) => {
                // An error happened.
                console.log(error);

            });
        },

        // registration -------------
        registerWithEmail() {

            createUserWithEmailAndPassword(auth, this.typedEmail, this.typedPass, this.regname, this.regPhoto)
                .then((userCredential) => {
                    //
                    updateProfile(auth.currentUser, {
                        displayName: this.regname, photoURL: this.regPhoto
                    }).then(() => {
                        // Profile updated!
                        // ...
                        console.log("ptofile updated");

                    }).catch((error) => {
                        // An error occurred
                        // ...
                        console.log(error);

                    });
                    //
                    // Signed up 
                    const user = userCredential.user;
                    this.Loginuser = user
                    console.log(this.Loginuser);
                    this.sucessToaser = true

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error);
                    this.ErorrToaster = true
                    // ..
                }).finally(()=>{
                    setTimeout(() => {
                        this.ErorrToaster = false;
                        this.sucessToaser = false;
                    }, 3000);
                })


        },
        SignInEmailAndPass() {
            console.log("sign in press");
            signInWithEmailAndPassword(auth, this.typedEmail,this.typedPass)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    this.Loginuser = user
                    console.log(this.Loginuser);
                    this.sucessToaser =true
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    this.ErorrToaster  = true
                    console.log(error);
                    
                }).finally(()=>{
                    setTimeout(() => {
                          this.sucessToaser = false;
                          this.ErorrToaster = false;
                    }, 1000);
                })

        }
    }

})