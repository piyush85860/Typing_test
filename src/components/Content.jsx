import React, { useContext,useState,useRef,useEffect } from 'react'
import {data} from "../ContextA"
const Content = () => {
  const {arr,inputRef,text,settext,index,setindex,arr2,setarr2,colormap,setcorrect,setisrunning,isrunning,isfinished,setfinished}=useContext(data)
  const handlekeydown=(e)=>{
    if(isfinished)return;
    if(!isrunning){
      setisrunning(true);
    }
    if(e.key=="Backspace"){
      e.preventDefault();
      if(index==0)return;
      setarr2(prev=>{
        const copy=[...prev]
        copy[index-1]="active"
        return copy
      })
      setindex(prev=>prev-1)
      settext("")
    }

  }
  const handlechange = (e) => {
  if (isfinished) return;

  const value = e.target.value;
  if (!value) return;

  const char = value[value.length - 1];

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
          <p className="text-4xl font-semibold font-[Noto_Sans_Mono] font-extralight leading-[48px] whitespace-pre-line break-words">
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