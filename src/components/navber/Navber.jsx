import React, { useState } from 'react';
import Link from '../link/Link';
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Navber = () => {
    const [open, setOpen] = useState(true);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/users", name: "Users" },
        { id: 4, path: "/contact", name: "Contact" },
    ];

    return (
        <div>
            <div onClick={() => setOpen(!open)} className='text-3xl md:hidden  bg-yellow-100 p-2'>
                {
                    open === true ? <IoIosMenu />
                        : <IoCloseSharp />
                }
            </div>
            <ul className={`md:flex gap-5 text-xl font-medium duration-1000
            ${open? '-left-40':'left-0'}
                bg bg-yellow-100 p-4 absolute md:static top-10 `}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </div>
    );
};

export default Navber;