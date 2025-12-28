import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-center fixed translate-y-10'>
        <div className='bg-white/10 backdrop-blur-2xl flex items-center gap-12 rounded-full py-3 px-10'>
            <div className='w-full flex items-center justify-center gap-20 text-white/50 text-8sm font-light border-r-2 border-r-white/30 px-4'>
                <a href="">time</a>
                <a href="">punctuation</a>
                <a href="">numbers</a>
            </div>
            <div className='w-full flex items-center justify-center gap-8 text-white/50 text-lg font-light'>
                <p>30</p>
                <p>60</p>
                <p>120</p>
                <p>180</p>
            </div>
        </div>
    </div>
  )
}

export default Nav