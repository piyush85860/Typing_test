import React, { useContext,useRef} from 'react'
import 'remixicon/fonts/remixicon.css'
import { data } from '../ContextA'
const Nav = () => {
  const{words,punctuation,numbers,setp,randomInt,btnarr,setbtnarr,btnmap,timearr,numarr,setnumarr,nummap,timeleft,settimeleft,settimecalcu}=useContext(data);
  return (
    <div className='flex justify-center fixed translate-y-10'>
        <div className='bg-white/10 backdrop-blur-2xl flex items-center gap-5 rounded-full py-3 px-10'>
            <div className='w-full flex items-center justify-center gap-20 text-8sm font-light font-[Inter] border-r-2 border-r-white/30 px-4 [&>button]:flex [&>button]:gap-2'>
                <button className={btnmap[btnarr[0]]}><i className="ri-time-fill"></i> time</button>
                <button onClick={()=>{setp(punctuation[randomInt(0,4)]); setbtnarr(["active","active","notactive","notactive"])}} className={btnmap[btnarr[1]]}><i className="ri-double-quotes-l"></i> punctuation</button>
                <button onClick={()=>{setp(numbers[randomInt(0,4)]); setbtnarr(["active","notactive","active","notactive"])}} className={btnmap[btnarr[2]]}><i className="ri-sort-number-desc"></i> numbers</button>
                <button onClick={()=>{setp(words[randomInt(0,4)]); setbtnarr(["active","notactive","notactive","active"])}} className={btnmap[btnarr[3]]}><i class="ri-letter-spacing-2"></i> words</button>
            </div>
            <div className='w-full flex items-center justify-center font-[Inter] gap-8 text-white/50 text-lg font-light'>
                {timearr.map((elem,idx)=>{
                  return(<button onClick={()=>{settimeleft(elem); settimecalcu(elem); setnumarr(()=>{
                    const copy=["notactive","notactive","notactive","notactive","notactive"];
                    copy[idx]="active";
                    return copy;
                  })}} className={nummap[numarr[idx]]}>{elem}</button>)
                })}
            </div>
        </div>
    </div>
  )
}

export default Nav