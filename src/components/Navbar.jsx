import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <header className="bg-gray-200 w-250 max-w-[95%] border-b-2 border-black rounded-t-2xl p-4">
            <nav className="flex gap-6 font-[poppins] text-lg flex-wrap">
                <Link to='/'>Home</Link>
                <Link to='/add-habit'>Add habit</Link>
                <Link to='/habits'>View habits</Link>
                <Link to='/charts'>View charts</Link>
            </nav>
        </header>
    );

}