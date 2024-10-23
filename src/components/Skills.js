
import { useState } from 'react'
import './Skills.css'

export default function Certificate(){
    const webtech = "HTML , CSS , JS , JQuery , REACT , PHP , BOOTSTRAP , Tailwind , Node.js , SQL"
    const hardware =  "C , C++ , Pyhon , VHDL , VERILOG"
    const tools =  "Linux , XAMPP , ROS2 , git , Githup"
    let [skillsNav , setSkillsnav] = useState(1)
    return <div className='skills-wrap-all'>
        <div onMouseLeave={()=>setSkillsnav(skillsNav = 1)} onMouseEnter={()=>setSkillsnav(skillsNav = 2)} className='skills-item'>{skillsNav === 2 ? webtech:"Web Technologies"}</div>
        <div onMouseLeave={()=>setSkillsnav(skillsNav = 1)} onMouseEnter={()=>setSkillsnav(skillsNav = 3)} className='skills-item'>{skillsNav === 3 ? hardware:"Hardware controls"}</div>
        <div onMouseLeave={()=>setSkillsnav(skillsNav = 1)} onMouseEnter={()=>setSkillsnav(skillsNav = 4)} className='skills-item'>{skillsNav === 4 ? tools:"OS and Software Tools"}</div>
    </div>
}