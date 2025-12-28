import React from 'react'
import Nav from './Nav'
import Content from './Content'

const Section1 = () => {
  return (
    <div className='w-full h-screen bg-gray-800 relative flex items-center flex-col'>
      <Nav/>
      <h1 className='text-violet-600 mt-37 font-bold text-3xl'>Typhonic</h1>
      <h1 className='text-white/50 mt-10 font-extralight text-lg'>english</h1>
      <Content/>
    </div>
  )
}

export default Section1