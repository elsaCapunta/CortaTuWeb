
 var firebaseConfig ={
    apiKey: "AIzaSyC2k_ds-MNuNoHBb6hATa5giMMz54nXg-g",
    authDomain: "cortatuweb-5dd32.firebaseapp.com",
    projectId: "cortatuweb-5dd32",
    storageBucket: "cortatuweb-5dd32.appspot.com",
    messagingSenderId: "598711012010",
    appId: "1:598711012010:web:64b7ef19a9e225b1085ed3"
}

firebase.initializeApp(firebaseConfig); 


const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

auth.languageCode = "es";

export async function login(){
    try {
        const response = await auth.signInWithPopup(provider);
        console.log(response);
        return response.user;
    } catch (error) {
        console.log(error);
        throw new Error(error);
        
    }
}

export function logout(){
    try {
     const response = auth.signOut();
     return response;    
    } catch (error) {
        console.log(error);
        throw new Error(error);
        
    }
    
}