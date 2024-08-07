import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
const links = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Products',
        href: '/products',
    },
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Contacts',
        href: '/contacts',
    },
];
function Navbar() {
    let location = useLocation();
    const [isNavOpen,setIsNavOpen] = useState(false);
    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };
    useEffect(() => {
        if(typeof window !== 'undefined'){
            window.scrollTo({
                top: 0,
            });
        }
    },[location.pathname]);
  return <header className="bg-white border-b-[2px] border-b-slate-200 py-4">
        <nav className="container flex justify-between items-center">
            <div className="font-semibold text-blue-400 text-2xl">re:<span>commerce</span></div>
            <ul className={`fixed md:static transition-all duration-500 ease-in-out top-0 p-12 z-10 md:justify-end backdrop-blur-md bg-white/50 w-1/2 h-full flex flex-col md:flex-row md:p-0 md:items-center gap-4 text-xl ${isNavOpen ? 'right-0' : '-right-full'}`}>
                {links.map((link) => (
                    <li className="hover:text-blue-400" key={link.href}>
                        <Link className={location.pathname === link.href ? 'opacity-100 md:border-b-[6px] md:border-b-black hover:text-blue-400 md:hover:border-b-blue-400' : 'opacity-40 hover:text-blue-400 hover:opacity-100'} to={link.href}>{link.title}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={handleNavToggle} className="bg-black z-20 fixed right-4 mt-auto flex md:hidden text-white py-3 px-4 rounded-3xl border-[2px] border-black hover:bg-white hover:text-black">
                {isNavOpen ? <FaX /> : <FaBars /> }
            </button>
        </nav>
    </header>;
};

export default Navbar;