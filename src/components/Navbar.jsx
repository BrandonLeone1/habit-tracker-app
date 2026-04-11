import { NavLink } from "react-router-dom";
import { SignIn } from "./SignIn";
import { SignOut } from "./SignOut";
export function Navbar({user}) {
    return (
        <header className="bg-gray-300 w-250 max-w-[95%] border-b-2 border-black rounded-t-2xl p-4">
            <nav className="flex gap-6 font-[poppins] text-lg flex-wrap">
                <NavLink to='/' className={({isActive}) => isActive ? 'border-b-2 border-zinc-950' : "relative after:content:-[''] after:absolute after:left-0.5 after:-translate-x-0.5 after:bottom-0 after:h-0.5 after:w-full after:bg-zinc-950 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"}>Home</NavLink>
                <NavLink to='/add-habit' className={({isActive}) => isActive ? 'border-b-2 border-zinc-950' : "relative after:content:-[''] after:absolute after:left-0.5 after:-translate-x-0.5 after:bottom-0 after:h-0.5 after:w-full after:bg-zinc-950 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"}>Add habit</NavLink>
                <NavLink to='/habits' className={({isActive}) => isActive ? 'border-b-2 border-zinc-950' : "relative after:content:-[''] after:absolute after:left-0.5 after:-translate-x-0.5 after:bottom-0 after:h-0.5 after:w-full after:bg-zinc-950 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"}>View habits</NavLink>
                <NavLink to='/charts' className={({isActive}) => isActive ? 'border-b-2 border-zinc-950' : "relative after:content:-[''] after:absolute after:left-0.5 after:-translate-x-0.5 after:bottom-0 after:h-0.5 after:w-full after:bg-zinc-950 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"}>View charts</NavLink>
                
                
               
                { user ? (
                <SignOut />
                ) : (
                <SignIn />
                )
                }

            </nav>
        </header>
    );

}