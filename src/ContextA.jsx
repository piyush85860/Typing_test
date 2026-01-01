import React, { createContext, useRef, useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import App from './App'
export const data=createContext()
const ContextA = () => {
    const words = [
  "growth is a slow and steady process that requires patience consistency and belief in effort every single day people often expect immediate results but real improvement happens quietly beneath the surface learning takes place when the mind is challenged repeatedly over time skills develop as actions are repeated without giving up discipline grows when routines are followed even during low motivation moments progress feels invisible until suddenly it becomes obvious the journey of improvement involves confusion mistakes and repeated attempts but each attempt adds experience and strength staying committed during uncertainty builds resilience focus and confidence those who continue despite discomfort gain deeper understanding effort compounds when daily actions align with long term goals persistence is more important than talent because talent without consistency fades quickly success belongs to those who keep moving forward even when direction feels unclear growth becomes sustainable when expectations are realistic and effort is respected trust in the process allows learning to mature naturally over time improvement is rarely dramatic but always meaningful when consistency is maintained",

  "technology influences how people think communicate and learn every day access to information has become instant but understanding still requires time focus and reflection constant exposure to content can reduce attention span unless used intentionally those who control their digital habits gain mental clarity and deeper focus creation requires silence thought and patience while consumption demands very little effort modern tools offer powerful opportunities to learn build and connect but only when used with purpose distraction weakens creativity while intentional use strengthens skill development technology should support goals not replace thinking balance between online and offline effort leads to better learning outcomes the ability to filter information has become a critical skill in a noisy environment meaningful progress comes from applying knowledge rather than endlessly consuming it focus discipline and intentional action separate users from creators in the modern world mastery requires depth not speed and clarity not overload",

  "discipline is created through repeated actions performed regardless of emotional state motivation is temporary but habits remain reliable routines reduce decision fatigue and allow energy to be focused on meaningful tasks consistency builds trust in oneself and strengthens confidence over time small actions performed daily produce larger outcomes than occasional intense effort progress becomes predictable when systems are followed carefully discipline does not restrict freedom instead it creates stability and direction successful individuals rely on structure rather than willpower habits shape identity and identity influences behavior repetition reinforces commitment and clarity effort becomes easier when resistance is removed through routine discipline grows silently and steadily shaping long term success without requiring constant excitement",

  "learning is an active process that involves struggle repetition and curiosity understanding develops gradually as ideas connect together confusion signals growth rather than failure mistakes provide feedback that refines skill and awareness avoiding discomfort slows progress while embracing it accelerates mastery repetition builds familiarity and confidence learning deepens when concepts are applied in practice rather than memorized curiosity fuels exploration and persistence patience allows knowledge to mature naturally growth requires humility openness and continuous effort improvement is measured through consistency rather than speed experience strengthens intuition and understanding learning never truly ends because growth evolves with challenges",

  "time is a limited resource that shapes outcomes based on how it is used direction emerges from prioritizing meaningful effort over distraction planning provides clarity and reduces wasted energy focus allows progress to compound over time intentional decisions create momentum while reactive behavior leads to stagnation long term goals require alignment with daily actions small choices repeated consistently determine future results awareness of time usage builds responsibility and control progress depends on clarity discipline and commitment managing time effectively supports learning growth and stability purpose driven effort transforms ordinary days into meaningful progress"
];
const punctuation = [
  "Creativity is often misunderstood as a sudden burst of inspiration, but in reality it is a disciplined process built through repetition and observation. Most creative work does not begin with clarity; it begins with uncertainty, rough ideas, and incomplete thoughts. The mind explores possibilities by making connections, rejecting weak ideas, and refining promising ones. This process can feel slow and frustrating, especially when progress is not immediately visible. However, creativity thrives when individuals allow themselves to experiment without fear of failure. Each attempt, successful or not, contributes to a deeper understanding of the problem at hand. Over time, patterns emerge, intuition sharpens, and ideas become more refined. Creative growth depends heavily on exposure to diverse perspectives, consistent practice, and the willingness to revise previous work. Those who commit to the process develop a unique voice that evolves naturally. Creativity is not a talent reserved for a few; it is a skill that strengthens through deliberate effort and patience.",

  "Modern life moves at an intense pace, creating constant pressure to stay productive, responsive, and informed. Notifications, deadlines, and expectations compete for attention throughout the day. Without intentional boundaries, mental fatigue becomes unavoidable. Rest is often mistaken for laziness, yet it plays a critical role in sustaining performance and well being. When individuals fail to pause, clarity diminishes and decision making suffers. Taking time to disconnect allows the mind to recover and process experiences more effectively. Balance does not mean avoiding responsibility; it means managing energy wisely. Establishing routines for rest improves focus, emotional stability, and long term resilience. Sustainable productivity comes from understanding personal limits and respecting them. Those who prioritize recovery alongside effort tend to maintain consistency and avoid burnout over time.",

  "Learning through experience differs greatly from learning through instruction alone. While guidance provides direction, experience builds understanding through direct interaction with challenges. Mistakes serve as valuable feedback, revealing gaps in knowledge and areas for improvement. This trial and error process strengthens memory and reinforces practical skill. Experiential learning encourages adaptability, problem solving, and confidence. Each challenge encountered becomes a reference point for future decisions. Over time, individuals develop intuition that cannot be gained through theory alone. Growth accelerates when reflection follows experience, allowing lessons to become internalized. Applying knowledge in real situations transforms abstract concepts into usable tools. This form of learning demands patience and courage but delivers lasting competence.",

  "Ambition drives individuals to pursue goals that extend beyond their current abilities. While ambition can inspire growth, it can also create pressure when expectations exceed realistic limits. Healthy ambition balances aspiration with self awareness. Progress requires breaking large goals into manageable steps and celebrating incremental achievements. Comparison often distorts perception, making progress feel insufficient despite meaningful effort. Focusing on personal improvement rather than external benchmarks builds confidence and motivation. Sustainable ambition adapts to setbacks without losing direction. Flexibility allows goals to evolve alongside experience and changing circumstances. When ambition is guided by purpose rather than ego, it becomes a powerful force for long term fulfillment.",

  "Communication shapes relationships, collaboration, and understanding in every environment. Clear expression reduces confusion and builds trust, while poor communication leads to misalignment and conflict. Effective communication requires listening as much as speaking. Understanding context, tone, and perspective strengthens connection. In professional and personal settings, clarity saves time and prevents unnecessary friction. Thoughtful communication considers the audience and intent behind each message. Over time, strong communicators develop influence and credibility. They adapt their approach based on feedback and remain open to dialogue. Communication is not static; it improves through awareness and practice. Mastering this skill enhances cooperation, leadership, and shared success."
];
const numbers = [
  "progress over 1 year often looks different from progress over 10 years many people quit after 30 days because results do not match expectations built in the first 7 days learning a skill for 100 hours feels slow but reaching 1000 hours creates confidence daily effort of 1 percent improvement compounds into massive change over 365 days consistency for 52 weeks beats intensity for 5 days habits formed in the first 90 days often define outcomes for the next 5 years small actions repeated 100 times build discipline effort invested at age 18 shows results by age 25 patience across months 6 12 and 24 separates beginners from experts",

  "technology adoption has increased rapidly over the last 20 years with usage growing from 1 device per person to 3 or more screens daily people consume information for 6 to 10 hours each day yet apply less than 20 percent of what they learn managing digital time for even 2 hours daily improves focus and clarity those who practice skills 5 days a week outperform those who practice once every 14 days learning platforms allow access to 1000 courses but mastery still requires repetition across weeks 4 8 and 16 technology becomes useful when numbers turn into action not just consumption",

  "discipline grows through repetition performed 365 days a year motivation may appear for 10 minutes but habits last for decades routines built at 6 am or 7 am shape productivity for the entire day completing 3 important tasks daily leads to over 1000 completed tasks in a year discipline removes the need for 50 daily decisions energy saved compounds into focus consistency over 12 months builds trust in oneself habits repeated 1000 times become automatic systems outperform goals because systems operate every day not only on day 1",

  "learning improves when practice follows theory within 24 hours retention drops after 48 hours without application repeating concepts 3 times increases recall dramatically making 10 mistakes teaches more than reading 10 pages experience gained over 500 attempts builds intuition reflection after each session for 5 minutes improves clarity confusion in the first 2 weeks often leads to understanding by week 8 learning curves flatten before breakthroughs appear persistence through phase 1 phase 2 and phase 3 creates mastery",

  "time management influences results more than raw talent tracking time for 7 days reveals patterns most people ignore allocating 2 hours daily to focused work produces more output than 8 distracted hours long term goals require alignment with daily schedules planning weekly for 52 weeks creates direction reducing wasted time by 30 percent frees energy for growth small improvements repeated over 100 days create visible change progress depends on consistency clarity and commitment across months years and decades"
];


function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



    const [p, setp] = useState(words[randomInt(1, 4)])
    const arr=p.split("")
    const inputRef=useRef(null)
    const [correct, setcorrect] = useState(0)
    const [text, settext] = useState("")
    const [index, setindex] = useState(0)
    const [arr2, setarr2] = useState(Array(arr.length).fill(""))
    const [timeleft, settimeleft] = useState(60)
    const [timecalcu, settimecalcu] = useState(60)
    const [isrunning, setisrunning] = useState(false)
    const [isfinished, setisfinished] = useState(0)
    const [btnarr, setbtnarr] = useState(["active","notactive","notactive","active"])
    const btnmap={active:"text-[#c87aff] font-bold",notactive:"text-white/50 hover:text-white"}
    const timearr=[15,30,60,120,180,300]
    const [numarr, setnumarr] = useState(["notactive","active","notactive","notactive","notactive"])
    const nummap={active:"text-[#c87aff] font-bold",notactive:"text-white/50 hover:text-white"}
    const [WPM, setWPM] = useState(0)
    const [move, setmove] = useState(0)
    const colormap={backactive:"border-l-2 border-[#c87aff] text-white/50",correctactive:"border-r-2 border-[#c87aff] text-green-300",correct:"text-green-300",incorrectactive:"border-r-2 border-[#c87aff] text-red-400",incorrect:"text-red-400"}
  return (
    <BrowserRouter>
          <data.Provider value={{arr,inputRef,text,settext,index,setindex,arr2,setarr2,colormap,correct,setcorrect,timeleft,settimeleft,isrunning,setisrunning,isfinished,setisfinished,words,punctuation,numbers,randomInt,setp,btnarr,setbtnarr,btnmap,timearr,numarr,setnumarr,nummap,setWPM,WPM,settimecalcu,timecalcu,move,setmove}}>
              <App/>
          </data.Provider>
    </BrowserRouter>
  )
}

export default ContextA