import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function SignIn() {

    function handleSignIn() {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    return (
        <button onClick={() => handleSignIn()} className="font-[poppins] text-lg text-zinc-950 cursor-pointer md:ml-auto relative after:content:-[''] after:absolute after:left-0.5 after:-translate-x-0.5 after:bottom-0 after:h-0.75 after:w-full after:bg-zinc-950 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">Sign in</button>
    );

}