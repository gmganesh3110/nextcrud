import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
            <Link className='text-white font-bold ' href='/'>G M Ganesh</Link>
            <Link className='bg-white p-2' href='/addTopic'>Add Topic</Link>
        </nav>
    </div>
  )
}

export default NavBar