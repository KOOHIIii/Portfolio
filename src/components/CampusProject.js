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
            {navCampus === 1 ? <Kenta/> : null}
            {navCampus === 2 ? <speexx/> : null}
        </div>
        <div className='campus-right-item'>
            <i onClick={next} class="fa-solid fa-chevron-right"></i>
        </div>
    </div>
}

function Kenta(){
    return <div className='kenta-wrap-all'>
        <h1>Kenta Smart Sleeping Pad</h1>
        <div className='kenta-content-box'>
            <div className='kenta-img-box-login'>
            </div>
            <div className='kenta-text-box'>
                <div className='text-box-grid'>
                    <div className='text-box-item1'>Info</div>
                    <div className='text-box-item2'>Login</div>
                    <div className='text-box-item3'>Register</div>
                    <div className='text-box-item4'>Database</div>
                    <div className='text-box-item5'>item5</div>
                </div>
            </div>
        </div>
    </div>
}
