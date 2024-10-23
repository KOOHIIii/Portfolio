import { useState } from 'react'
import './SelfProject.css'

export default function SelfProject(){
    let [navSelf , setNavself] = useState(1)
    function previous(){
        if (navSelf > 1){
            setNavself(navSelf = navSelf-1)
        }
    }
    function next(){
        if (navSelf < 2){
            setNavself(navSelf = navSelf+1)
        }
    }
    return <div className='self-wrap-all'>
        <div className='self-top-item'>
            <div className={`bullet ${navSelf === 1 && "active"}`}></div>
            <div className={`bullet ${navSelf === 2 && "active"}`}></div>
        </div>
        <div className='self-left-item'>
            <i onClick={previous} class="fa-solid fa-chevron-left"></i>
        </div>
        <div className='self-center-item'>
            {navSelf === 1 ? <letter/> : null}
            {navSelf === 2 ? <speexx/> : null}
        </div>
        <div className='self-right-item'>
            <i onClick={next} class="fa-solid fa-chevron-right"></i>
        </div>
    </div>
}