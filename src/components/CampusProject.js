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
            {navCampus === 2 ? <Robot/> : null}
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
        return <div className='item5-content-box'>
            <h1>Kenta Smart Sleeping Pad</h1>
            <p>The project aims to assist in monitoring bedridden patients to determine how long they have been in the same position, addressing the issue of pressure sores. The project is divided into two parts: software and hardware. This presentation focuses on the software aspect, which is a web dashboard for monitoring the sleeping position of bedridden patients.</p>
        </div>
    }
    function Login(){
        return <div className='item5-content-box'>
            <h1>Login Page</h1>
            <p>An example of an actual project is the login page designed and created using HTML, CSS, JS, and PHP to connect to a database for checking whether the username and password match.</p>
        </div>
    }
    function Regis(){
        return <div className='item5-content-box'>
            <h1>Register Page</h1>
            <p>An example of an actual project is the registration page designed and created using HTML, CSS, and PHP to create a form that submits data to the database.</p>
        </div>
    }
    function Data(){
        return <div className='item5-content-box'>
            <h1>Database Page</h1>
            <p>An example of an actual project is the design of a database structure using MySQL and XAMPP as a local host. The following image illustrates the data table for the registration form.</p>
        </div>
    }
}

function Robot(){
    return <div className='robot-wrap-all'>
        <div className='robot-wrap-link'>
            <h1>Robot Studio Web Site With WordPress - </h1>
            <a href='https://robotstudio.bu.ac.th/'>
                <h1>Visit Site</h1>
            </a>
        </div>
        <div className='robot-img-box'>
            <img src={require('../img/robotstudio.png')} alt='Robot Studio Website'/>
        </div>
    </div>
}