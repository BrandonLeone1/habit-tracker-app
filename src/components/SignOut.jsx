import { getAuth, signOut } from "firebase/auth";



export function SignOut() {
 
    function handleSignOut() {
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        console.log("success")
        }).catch((error) => {
        // An error happened.
        console.log(error)
        });
    }

return (
    <button onClick={() => handleSignOut()}>Sign out</button>
);

}