import { useState } from 'react'
import './Certificate.css'

export default function Certificate(){
    const [navCer , setNavcer] = useState(2)
    return <div className='cer-wrap-all'>
        <div className='cer-top-item'>
            <div className='bullet'></div>
            <div className='bullet'></div>
            <div className='bullet'></div>
        </div>
        <div className='cer-left-item'>
            <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div className='cer-center-item'>
            {navCer === 1 ? <Letter/> : null}
            {navCer === 2 ? <Speexx/> : null}
        </div>
        <div className='cer-right-item'>
            <i class="fa-solid fa-chevron-right"></i>
        </div>
    </div>
}

function Letter(){
    return <div className='letter-wrap-all'>
        <h1>Speexx certificate</h1>
        <div className='speexx-img-box'>
            <img src='/img/speexx1.png' alt='speexx1 certificate' />
            <img src='/img/speexx2.png' alt='speexx1 certificate' />
        </div>
    </div>
}

function Speexx(){
    return <div className='speexx-wrap-all'>
        <h1>Speexx certificate</h1>
        <div className='speexx-img-box'>
            <img src='/img/speexx1.png' alt='speexx1 certificate' />
            <img src='/img/speexx2.png' alt='speexx1 certificate' />
        </div>
    </div>
}