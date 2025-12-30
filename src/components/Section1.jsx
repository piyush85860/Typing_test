import React, { useContext,useEffect } from 'react'
import Nav from './Nav'
import Content from './Content'
import {data} from "../ContextA"
const Section1 = () => {
  const {inputRef,timeleft,settimeleft,isrunning,setisrunning,isfinished,setisfinished}=useContext(data);
  useEffect(()=>{
      inputRef.current?.focus()
    },[])
    useEffect(()=>{
      if(!isrunning)return;
      if(timeleft==0){
        setisrunning(false);
        setisfinished(true);
        return;
      }
      const interval=setInterval(()=>{
        settimeleft(prev=>prev-1);
      },1000);
      return () => clearInterval(interval);
    },[isrunning,timeleft])

    
  return (
    <div className='w-full h-screen bg-black/90 relative flex items-center flex-col'>
      <Nav/>
      <h1 className='text-[#c87aff] mt-37 font-bold text-8xl flex gap-3 font-[Asimovian]'><i class="ri-keyboard-line"></i>Typhonic</h1>
      <h1 className='text-white/50 mt-10 font-extralight text-lg'><i class="ri-earth-line"></i>english</h1>
      <div className='w-full flex justify-start px-40 text-3xl font-bold text-[#c87aff]'><h1><i class="ri-time-fill"></i>{timeleft}s</h1></div>
      <Content/>
    </div>
  )
}

export default Section1