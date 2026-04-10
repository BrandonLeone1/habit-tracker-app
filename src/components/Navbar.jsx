import { NavLink } from "react-router-dom";
import { SignIn } from "./SignIn";
import { SignOut } from "./SignOut";
export function Navbar() {
    return (
        <header className="bg-gray-300 w-250 max-w-[95%] border-b-2 border-black rounded-t-2xl p-4">
            <nav className="flex gap-6 font-[poppins] text-lg flex-wrap">
                <NavLink to='/' className={({isActive}) => isActive ? 'border-b-2 border-zinc-950' : ''}>Home</NavLink>
                <NavLink to='/add-habit' className={({isActive}) => isActive ? 'border-b-2 border-zinc-950' : ''}>Add habit</NavLink>
                <NavLink to='/habits' className={({isActive}) => isActive ? 'border-b-2 border-zinc-950' : ''}>View habits</NavLink>
                <NavLink to='/charts' className={({isActive}) => isActive ? 'border-b-2 border-zinc-950' : ''}>View charts</NavLink>
                <SignIn />
                <SignOut />
            </nav>
        </header>
    );

}