'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const About = () => {
    const Route = useRouter()
  return (
    <>
    <div className='bg-blue-950 h-14 flex justify-between items-center text-yellow-300'>
      <h1 className='text-3xl'>This is a About Page</h1>
      <ul>
        <button className='mr-6 hover:text-white' onClick={() => Route.push('/')}>Home</button>
        <button className='mr-6 hover:text-white' onClick={() => Route.push('/components/contact')}>Contact</button>
        <button className='mr-6 hover:text-white' onClick={() => Route.push('/components/footer')}>Footer</button>
        <button className='mr-6 hover:text-white' onClick={() => Route.push('/components/navbar')}>Navbar</button>
      </ul>
    </div>
    <div className='bg-orange-100 text-center h-screen'>
    <a href="https://github.com/Mithu3311" target='_blank'><u className='text-blue-950'>©All Right Reserved! Made By <b>MITHU</b></u></a>
    </div>
    </>
  )
}

export default About