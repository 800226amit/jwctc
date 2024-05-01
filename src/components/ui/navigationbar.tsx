'use client'
import React from 'react'
import Link from 'next/link'
import "../amit.css"
export default function Navigation() {
    return (
        <div className='text-blue-950 bg-red-100  px-4'>
            <nav className=''>
                <div className='list-none text-2xl font-serif flex py-8 flex flex-row justify-end gap-8'>
                    <li className=''>
                        <Link href="/about" className="link">About</Link>
                    </li>
                    <li className=''>
                        <Link href="/about" className="link" >Contact</Link>
                    </li>
                    <li className=''>
                        <Link href="/about" className="link" >Projects</Link>
                    </li>
                    <li className=' '>
                        <Link href="/about" className="link">Blogs</Link>
                    </li>
                </div>
            </nav>



        </div>


    )
}
