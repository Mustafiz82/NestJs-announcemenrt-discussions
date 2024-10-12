"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav = () => {

    const pathname  = usePathname()
    return (
        <div className='bg-base-200'>
            <ul className='flex text-2xl  justify-center items-center gap-5 p-2'>
            <li>
                    <Link href="/" className={` ${pathname == "/" ? "text-red-500" : ""} `}> Announcement
                    </Link>
                </li> 
                <li>
                    <Link href="/discussions" className={` ${pathname == "/discussions" ? "text-red-500" : ""} `}> Discussion
                    </Link>
                </li>
               
            </ul>
        </div>
    );
};

export default Nav;