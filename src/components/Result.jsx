import React, { useContext, useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'
import {data} from "../ContextA"
import { useNavigate } from 'react-router-dom';
const Result = () => {
    const {correct,WPM,setWPM,timecalcu,isfinished,setisfinished,arr2,setarr2,arr,setindex,settext,setisrunning,settimeleft}=useContext(data)
      const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isfinished) {
  //     navigate("/", { replace: true });
  //   }
  // }, [isfinished, navigate]);
    useEffect(()=>{
        const correctChars = arr2.filter(s => s === "correct").length;
        const minutes = timecalcu / 60;

        const wpm = minutes > 0
        ? Math.round((correctChars / 5) / minutes)
        : 0;
        setWPM(wpm);
    },[isfinished])
    const resetTest = () => {
      setindex(0);
      setarr2(Array(arr.length).fill("nonactive"));
      settext("");
      setisrunning(false);
      setisfinished(false);
      settimeleft(60);
      navigate("/Section1", { replace: true });}
  return (
    <div className='w-full h-screen bg-gray-900 py-20'>
        <div className='w-full text-8xl text-[#c87aff] flex gap-2 justify-center mb-10 font-[Asimovian]'>
            <h1 className='flex gap-2'><i class="ri-keyboard-line"/>TYPHONIC</h1>
        </div>
        <div className=' text-3xl  flex justify-center mb-40 font-[Inter] font-bold'>
            <button onClick={resetTest} className='text-white bg-[#c87aff] py-3 px-3 rounded-3xl'><i className="ri-restart-line"></i></button>
        </div>
        <div className='w-full flex justify-center gap-30'>
            <div className='flex flex-col justify-center items-center gap-2 py-20 px-20 rounded-full bg-gray-800'>
                <h1 className='text-2xl text-white font-light'>WPM</h1>
                <h1 className='text-9xl text-[#c87aff] font-bold font-[Inter]'>{WPM}</h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 py-20 px-20 rounded-full bg-gray-800'>
                <h1 className='text-2xl text-white font-light'>correct characters</h1>
                <h1 className='text-9xl text-[#c87aff] font-bold font-[Inter]'>{correct}</h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 py-20 px-20 rounded-full bg-gray-800'>
                <h1 className='text-2xl text-white font-light'>timetaken</h1>
                <h1 className='text-9xl text-[#c87aff] font-bold font-[Inter]'>{timecalcu}s</h1>
            </div>
        </div>

    </div>
  )
}

export default Result