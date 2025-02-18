import React from 'react';
import Link from '../link/Link';

const Navber = () => {
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/users", name: "Users" },
        { id: 4, path: "/contact", name: "Contact" },
    ];

    return (
        <div>
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