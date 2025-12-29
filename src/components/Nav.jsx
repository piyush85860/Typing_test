import React, { useContext,useRef} from 'react'
import 'remixicon/fonts/remixicon.css'
import { data } from '../ContextA'
const Nav = () => {
  const{words,punctuation,numbers,setp,randomInt}=useContext(data);
  return (
    <div className='flex justify-center fixed translate-y-10'>
        <div className='bg-white/10 backdrop-blur-2xl flex items-center gap-5 rounded-full py-3 px-10'>
            <div className='w-full flex items-center justify-center gap-20 text-white/50 text-8sm font-light border-r-2 border-r-white/30 px-4 [&>button]:flex [&>button]:gap-2'>
                <button ><i className="ri-time-fill"></i> time</button>
                <button onClick={(e)=>{setp(punctuation[randomInt(0,4)])}}><i className="ri-double-quotes-l"></i> punctuation</button>
                <button onClick={()=>{setp(numbers[randomInt(0,4)])}}><i className="ri-sort-number-desc"></i> numbers</button>
                <button onClick={()=>{setp(words[randomInt(0,4)])  }}><i class="ri-letter-spacing-2"></i> words</button>
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