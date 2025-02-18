import React, { useState } from 'react';
import Link from '../link/Link';
import { IoIosMenu } from "react-icons/io";



const Navber = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/users", name: "Users" },
        { id: 4, path: "/contact", name: "Contact" },
    ];

    return (
        <div>
            <div onClick={() =>setOpen(!open)} className='text-3xl '>
                {
                    open === true? 'open':'close'
                }
            </div>
            <ul className='md:flex gap-5 text-xl font-medium'>
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