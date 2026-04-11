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
    <button onClick={() => handleSignOut()} className="font-[poppins] text-lg text-zinc-950 cursor-pointer md:ml-auto relative after:content:-[''] after:absolute after:left-0.5 after:-translate-x-0.5 after:bottom-0 after:h-0.75 after:w-full after:bg-zinc-950 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">Sign out</button>
);

}