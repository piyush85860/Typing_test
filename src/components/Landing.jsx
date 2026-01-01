import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const headRef=useRef(null);
    const navigate=useNavigate();

  return (
    <div className='relative w-full min-h-screen bg-white relative bg-gradient-to-r from-[#c2b3ff] from-60% to-[#f2e6ff] to-95%'>
        <div className='w-full h-screen absolute inset-0 mix-blend-color-burn pointer-events-none'><img className='w-full h-full object-cover opacity-5' src="/img1.jpg" alt="" /></div>
        <nav className='w-full flex justify-between px-15 py-10 fixed top-0 left-0'>
            <button className=' px-5 text-white bg-[#c87aff] rounded-4xl font-[Inter] font-light text-lg'>Sign up</button>
            <div className='px-15 py-4 gap-30 flex bg-white/30 backdrop-blur-sm text-black/80 rounded-4xl font-[Inter] font-light text-lg'>
                <a href="">Home</a>
                <a href="">About us</a>
            </div>
            <button className='px-5 text-white bg-[#c87aff] rounded-4xl font-[Inter] font-light text-lg'>Login</button>
        </nav>
        <div className='relative w-full h-screen flex justify-center items-center flex-col'>
            <h1 ref={headRef} className='absolute z-1 text-[20rem] font-[League_Gothic] bg-gradient-to-b from-black via-violet-900 to-[#c87aff]
  bg-clip-text text-transparent translate-y-[-10px]  translate-x-[10px]'>TYPHONIC</h1>
            <h1 className=' heading2 text-[20rem] font-[League_Gothic] [-webkit-text-stroke:2px_rgb(0,0,0,0.6)] text-transparent'>TYPHONIC</h1>
            <div className='absolute w-full px-80 text-3xl font-light font-[Inter] flex justify-between translate-y-[150px]'>
                <p>Train your fingers.</p>
                <p>Upgrade your speed.</p>
            </div>
            <div className='absolute z-1 translate-y-50'><button onClick={()=>{navigate("/section1")}} className='hover:bg-black text-2xl px-5 py-2 rounded-xl font-light text-white/80 bg-[#c87aff] font-[Inter]'>Test your Speed</button></div>
            <div className='absolute w-[60vh] px-9 py-3 font-[Inter] text-2xl font-extralight rounded-4xl bg-black/2 backdrop-blur-lg translate-y-70 translate-x-[-90%]'>
                <p className='bg-gradient-to-b from-black via-violet-900 to-[#c87aff]
  bg-clip-text text-transparent'>A minimalist typing test designed for accuracy, rhythm, and muscle memory — no fluff, just performance.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Landing