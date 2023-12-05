import React from "react";
import { Link } from "react-router-dom";

type Iprops = {
    show:boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    children?:React.ReactNode;
}
function Navbar({show, children, setShow}:Iprops) {
    return (
        <>
        
            <nav
                className={`absolute ${show?'left-0':'-left-full'} top-0 z-[1035] h-full w-2/12  overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-200 `}
            >
                <button className="absolute z-[1999] right-5 top-5" onClick={()=>setShow(false)}>
                &#10005;
                </button>
                <ul
                    className="relative text-left ms-3 mt-3"
                >
                    <li className="relative">
                       <Link to="/">
                            <span>Link 1</span>
                            </Link>     
                    </li>
                </ul>
            </nav>
            {children}
        </>
    );
}

export default Navbar;
