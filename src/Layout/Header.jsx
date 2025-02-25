import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {

    const { user, loading, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error));
    }

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/our-menu">Our Menu</Link></li>
        <li><Link to="/our-shop">Our Shop</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
    </>


    return (
        <div className="bg-base-100 shadow-sm">
            <div className="container">
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {navItems}
                            </ul>
                        </div>
                        <Link className="text-2xl font-bold" to="/">Roof Res</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {loading ? (
                            <div className="skeleton h-[38px] w-[38px] rounded-full"></div>
                        ) : user ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li><button className="justify-between">Profile</button></li>
                                    <li><button>Settings</button></li>
                                    <li><button onClick={handleLogOut}>Logout</button></li>
                                </ul>
                            </div>
                        ) : (
                            <Link className="btn btn-primary" to="/login">Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;