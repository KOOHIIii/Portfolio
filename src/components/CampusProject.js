import { useState } from 'react'
import './CampusProject.css'
export default function CampusProject (){
    var [navCampus , setNavcampus] = useState(1)
    function previous(){
        if (navCampus > 1){
            setNavcampus(navCampus = navCampus-1)
        }
    }
    function next(){
        if (navCampus < 2){
            setNavcampus(navCampus = navCampus+1)
        }
    }
    return <div className='campus-wrap-all'>
        <div className='campus-top-item'>
            <div className={`bullet ${navCampus === 1 && "active"}`}></div>
            <div className={`bullet ${navCampus === 2 && "active"}`}></div>
        </div>
        <div className='campus-left-item'>
            <i onClick={previous} class="fa-solid fa-chevron-left"></i>
        </div>
        <div className='campus-center-item'>
            {navCampus === 1 ? <letter/> : null}
            {navCampus === 2 ? <speexx/> : null}
        </div>
        <div className='campus-right-item'>
            <i onClick={next} class="fa-solid fa-chevron-right"></i>
        </div>
    </div>
}