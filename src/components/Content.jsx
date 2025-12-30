import React, { useContext,useState,useRef,useEffect } from 'react'
import {data} from "../ContextA"
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Content = () => {
  const navigate = useNavigate();
  const para=useRef(null);
  const {arr,inputRef,text,settext,index,setindex,arr2,setarr2,colormap,setcorrect,setisrunning,isrunning,isfinished,setfinished,move,setmove}=useContext(data)
  useGSAP(()=>{
    if(move==160){
      gsap.to(para.current,{
        y:"-=150",
        duration:0.3,
        ease:"power2.out",
        onComplete:()=>{
          setmove(0);
        }
      })
      
    }
  },[move])
  const handlekeydown=(e)=>{
    if(isfinished)return;
    if(!isrunning){
      setisrunning(true);
    }
    if(e.key=="Backspace"){
      e.preventDefault();
      if(index==0)return;
      setmove(prev=>prev-1);
      setarr2(prev=>{
        const copy=[...prev]
        copy[index-1]="active"
        return copy
      })
      setindex(prev=>prev-1)
      settext("")
    }

  }
  useEffect(() => {
  if (isfinished) {
    let a=0;
    arr2.forEach((elem)=>{
      if(elem==="correct" || elem==="correctactive"){
        a++;
      }
    })
    setcorrect(a);
    navigate("/result");
  }
}, [isfinished, navigate]);
  const handlechange = (e) => {
  if (isfinished){
    return;
    
  }

  const value = e.target.value;
  if (!value) return;

  const char = value[value.length - 1];
  setmove(prev=>prev+1);
  setarr2(prev => {
    const copy = [...prev];

    if (index > 0) {
      if (copy[index - 1] === "correctactive") {
        copy[index - 1] = "correct";
      } else if (copy[index - 1] === "incorrectactive") {
        copy[index - 1] = "incorrect";
      }
    }

    if (char === arr[index]) {
      copy[index] = "correctactive";
      setcorrect(prev => prev + 1);
    } else {
      copy[index] = "incorrectactive";
    }

    return copy;
  });

  setindex(prev => prev + 1);
  settext("");
};


  return (
    <div className='relative w-full flex justify-center mt-30'>
      <div className='<div className="absolute opacity-0 pointer-events-none">'>
          <textarea onKeyDown={handlekeydown} onChange={(e)=>{handlechange(e)}} value={text} ref={inputRef} className='w-0 h-0 resize-none overflow-hidden' onBlur={() => inputRef.current.focus()}></textarea>
        </div>
        <div className="w-[80vw] h-[24vh] overflow-y-auto text-container">
          <p ref={para} className="text-5xl font-[Josefin_Sans] font-[330] leading-[52px] whitespace-pre-line break-words tracking-[0.2rem]">
            {arr.map((char, idx) => (
              <span
                key={idx}
                className={colormap[arr2[idx]] || "text-white/30"}
              >
                {char}
              </span>
            ))}
          </p>
        </div>
        

    </div>
  )
}

export default Content