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
    var [kenNav , setKennav] = useState(1)
    var classSet = "";
    if (kenNav === 1 ){
        classSet = "kenta-img-box-dashBoard"
    }
    else if(kenNav === 2){
        classSet = "kenta-img-box-login"
    }
    else if(kenNav === 3){
        classSet = "kenta-img-box-regis"
    }
    else{
        classSet = "kenta-img-box-data"
    }
    return <div className='kenta-wrap-all'>
        <h1>Kenta Smart Sleeping Pad</h1>
        <div className='kenta-content-box'>
            <div className={classSet}>
            </div>
            <div className='kenta-text-box'>
                <div className='text-box-grid'>
                    <div onClick={()=>setKennav(kenNav = 1)} className={`text-box-item1 ${kenNav === 1 && "active"}`}>Info</div>
                    <div onClick={()=>setKennav(kenNav = 2)} className={`text-box-item2 ${kenNav === 2 && "active"}`}>Login</div>
                    <div onClick={()=>setKennav(kenNav = 3)} className={`text-box-item3 ${kenNav === 3 && "active"}`}>Register</div>
                    <div onClick={()=>setKennav(kenNav = 4)} className={`text-box-item4 ${kenNav === 4 && "active"}`}>Database</div>
                    <div className='text-box-item5'>
                        {kenNav === 1 ? <Info/> : null}
                        {kenNav === 2 ? <Login/> : null}
                        {kenNav === 3 ? <Regis/> : null}
                        {kenNav === 4 ? <Data/> : null}
                    </div>
                </div>
            </div>
        </div>
    </div>
    function Info(){
        return <div>
            <h1>Info</h1>
        </div>
    }
    function Login(){
        return <div>
            <h1>Login</h1>
        </div>
    }
    function Regis(){
        return <div>
            <h1>Regis</h1>
        </div>
    }
    function Data(){
        return <div>
            <h1>Data</h1>
        </div>
    }
}
