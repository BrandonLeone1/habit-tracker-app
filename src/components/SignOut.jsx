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
    <button onClick={() => handleSignOut()} className="font-[poppins] text-lg text-zinc-950 cursor-pointer md:ml-auto">Sign out</button>
);

}