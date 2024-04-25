import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider/AuthProvider";


const Navbar = () => {
    const { user,logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const links = <>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>
        <NavLink to="/addCoffee"><li>AddCoffee</li></NavLink>
        <NavLink to="/users"><li>users</li></NavLink>

    </>

    const handleLogOut = () =>{
        logOut();
        navigate('/')
    }
    return (
        <div className="h-16 shadow-2xl">
            <nav className="navbar  max-w-7xl mx-auto px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52">
                            {/* links */}
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <p className="text-xl font-bold text-emerald-900">Coffee-House</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex items-center">
                    <ul className="menu menu-horizontal px-1 gap-10 flex items-center">
                        {/* links */}
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="h-10 w-10 rounded-full">
                                <img src={user.photoURL} alt="" />
                            </div>
                            <button 
                            onClick={handleLogOut}
                            href="#_" className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer  border-l-2 active:border-emerald-900 active:shadow-none shadow-lg bg-gradient-to-tr from-emerald-900 to-emerald-900 border-emerald-900 text-white">
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                <span className="relative">LogOut</span>
                            </button>
                        </>
                            :
                            <>
                                <p>user ni</p>
                                <Link to='/login'>
                                    <button href="#_" className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer  border-l-2 active:border-emerald-900 active:shadow-none shadow-lg bg-gradient-to-tr from-emerald-900 to-emerald-900 border-emerald-900 text-white">
                                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                        <span className="relative">Login</span>
                                    </button>
                                </Link>
                            </>
                    }

                </div>
            </nav>
        </div>
    );
};

export default Navbar;