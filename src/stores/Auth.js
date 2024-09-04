import { defineStore } from "pinia";
//way to use route in pinia
import router from '@/router/index';
// everywhere use
import { auth } from '../firebase/firebase.config';
import { storage } from "../firebase/firebase.config";
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
//import{storage} from "@/firebase/firebase.config"

import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";

const Googleprovider = new GoogleAuthProvider();


export const UseAuthStore = defineStore('AuthStore', {
    state: () => ({
        regname: '',
        regPhoto: '',
        typedEmail: "",
        typedPass: '',
        typeLoginEmail: '',
        typedLoginpass: '',
        Loginuser: '',
        sucessToaser: '',
        ErorrToaster: '',
        ErrorMassage: '',
        redirect: '',
        Errorpasslength: '',
        //profile
        imgUrl: null,
        isfileuploded: '',
        file: null,
        isgoogleOngitHubLoggedIn : '',



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
                    this.isgoogleOngitHubLoggedIn = true

                    if (this.Loginuser) {
                        setTimeout(() => {
                            router.push({ name: 'profile' })
                        }, 3000);

                    }

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
                this.typeLoginEmail = ''
                this.typedLoginpass = ''
                this.Loginuser = ''
                this.imgUrl = null


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
                        displayName: this.regname
                    }).then(() => {
                        // Profile updated!
                        // ...
                        // , photoURL: this.regPhoto
                        console.log("ptofile updated");

                    }).catch((error) => {
                        // An error occurred
                        // ...
                        console.log(error);
                        this.ErrorMassage = error

                    });
                    //
                    // Signed up 
                    const user = userCredential.user;
                    this.Loginuser = user
                    console.log(this.Loginuser);
                    this.sucessToaser = true
                    this.redirect = true


                    if (this.Loginuser) {
                        setTimeout(() => {

                            router.push('/profile')
                        }, 3000);

                    }

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    this.ErorrToaster = true
                    this.ErrorMassage = errorMessage
                    // ..
                }).finally(() => {
                    // clearing from 
                    if (this.Loginuser) {
                        this.regname = ''
                        this.typedEmail = ""
                        this.typedPass = ''
                        this.regPhoto = ""
                    }

                    //
                    setTimeout(() => {
                        this.ErorrToaster = false;
                        this.sucessToaser = false;
                    }, 2000);
                })


        },
        SignInEmailAndPass() {
            console.log("sign in press");
            signInWithEmailAndPassword(auth, this.typeLoginEmail, this.typedLoginpass)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    this.Loginuser = user
                    console.log(this.Loginuser);
                    this.sucessToaser = true
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    this.ErorrToaster = true;
                    this.ErrorMassage = errorMessage
                    console.log(error);

                }).finally(() => {
                    // clearing from 
                    // 
                    setTimeout(() => {
                        this.sucessToaser = false;
                        this.ErorrToaster = false;
                    }, 1000);
                })

        },


        setFile(file) {
            this.file = file;
        },

        async uplodehandel() {


            console.log(this.file);


            try {
                const fileRef = ref(storage, `imege/${this.file.name}`);
                await uploadBytes(fileRef, this.file);
                console.log(`File uploaded successfully: ${this.file.name}`);

                //return `File uploaded successfully: ${ this.file.name}`;

            } catch (error) {
                console.error("Error uploading file:", error);
                this.isfileuploded = false;
            } finally {
                this.downlodehandele()
                setTimeout(() => {
                    this.isfileuploded = false;
                }, 2000);
            }




        },
        downlodehandele() {
            getDownloadURL(ref(storage, `imege/${this.file.name}`))
                .then((url) => {
                    // `url` is the download URL for 'images/stars.jpg'

                    // This can be downloaded directly:
                    const xhr = new XMLHttpRequest();
                    xhr.responseType = 'blob';
                    xhr.onload = (event) => {
                        const blob = xhr.response;
                    };
                    xhr.open('GET', url);
                    xhr.send();

                    // Or inserted into an <img> element
                    // const img = document.getElementById('myimg');
                    // img.setAttribute('src', url);
                    console.log(url);
                    this.imgUrl = url
                    // data set profile
                    updateProfile(auth.currentUser, {
                        photoURL: url
                    }).then(() => {
                        // Profile updated!
                        console.log(" Profile updated");

                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                        console.log(error);
                        
                    });

                    //

                })
                .catch((error) => {
                    // Handle any errors
                    console.log(error);

                });

        }
    }

})