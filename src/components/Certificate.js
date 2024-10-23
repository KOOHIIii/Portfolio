import { useState } from 'react'
import './Certificate.css'

export default function Certificate(){
    let [navCer , setNavcer] = useState(1)
    function previous(){
        if (navCer > 1){
            setNavcer(navCer = navCer-1)
        }
    }
    function next(){
        if (navCer < 2){
            setNavcer(navCer = navCer+1)
        }
    }
    return <div className='cer-wrap-all'>
        <div className='cer-top-item'>
            <div className={`bullet ${navCer === 1 && "active"}`}></div>
            <div className={`bullet ${navCer === 2 && "active"}`}></div>
        </div>
        <div className='cer-left-item'>
            <i onClick={previous} class="fa-solid fa-chevron-left"></i>
        </div>
        <div className='cer-center-item'>
            {navCer === 1 ? <Letter/> : null}
            {navCer === 2 ? <Speexx/> : null}
        </div>
        <div className='cer-right-item'>
            <i onClick={next} class="fa-solid fa-chevron-right"></i>
        </div>
    </div>
}

function Letter(){
    return <div className='letter-wrap-all'>
        <h1>Recommendation letter</h1>
        <div className='letter-img-box'>
            <img src='/img/Letter.jpg' alt='Recommendation letter' />
        </div>
    </div>
}

function Speexx(){
    return <div className='speexx-wrap-all'>
        <h1>Speexx certificate</h1>
        <div className='speexx-img-box'>
            <img src='/img/speexx1.jpg' alt='speexx1 certificate' />
            <img src='/img/speexx2.jpg' alt='speexx1 certificate' />
        </div>
    </div>
}