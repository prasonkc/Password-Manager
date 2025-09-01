import React from 'react'

const Navbar = () => {
  return (

    // Navbar
    <nav className='flex items-center justify-between h-20 bg-slate-900 text-slate-100 p-10'>
        <div className="logo font-bold cursor-pointer">
            Password Manager
        </div>
        <ul className='flex gap-4'>
            <li className='hover:font-bold'><a href="#">Home</a></li>
            <li className='hover:font-bold'><a href="#">About</a></li>
            <li className='hover:font-bold'><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar