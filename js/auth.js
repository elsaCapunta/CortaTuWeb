


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
