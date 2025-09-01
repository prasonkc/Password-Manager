import React from 'react'

const Manager = () => {
  return (
    <div className='bg-green-500 max-w-xl mx-auto p-3'>
        <h1 className='text-center'>Password Manager</h1>

        <div className='m-2'>
            <input className='bg-white rounded-xl w-full text-center' type="text" placeholder='Enter the website name'/>
            <div className="flex justify-between m-3 gap-3">
                <input  className='bg-white rounded-xl text-center w-1/2' type="text" placeholder='Username'/>
             <input  className='bg-white rounded-xl text-center w-1/2' type="text" placeholder='Password'/>
            </div>
        </div>
    </div>
  )
}

export default Manager  