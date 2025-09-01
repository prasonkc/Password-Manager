import React from 'react'

const Navbar = () => {
  return (

    // Navbar
    <nav className='flex items-center justify-around h-20 bg-green-200'>
        <div className="logo font-bold">
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