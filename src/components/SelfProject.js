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
        if (navSelf < 3){
            setNavself(navSelf = navSelf+1)
        }
    }
    return <div className='self-wrap-all'>
        <div className='self-top-item'>
            <div className={`bullet ${navSelf === 1 && "active"}`}></div>
            <div className={`bullet ${navSelf === 2 && "active"}`}></div>
            <div className={`bullet ${navSelf === 3 && "active"}`}></div>
        </div>
        <div className='self-left-item'>
            <i onClick={previous} class="fa-solid fa-chevron-left"></i>
        </div>
        <div className='self-center-item'>
            {navSelf === 1 ? <NinjaMail/> : null}
            {navSelf === 2 ? <Todolist/> : null}
            {navSelf === 3 ? <Colorpick/> : null}
        </div>
        <div className='self-right-item'>
            <i onClick={next} class="fa-solid fa-chevron-right"></i>
        </div>
    </div>
}

function NinjaMail(){
    return <div className='ninja-wrap-all'>
        <div className='ninja-wrap-link'>
            <h1>Ninja Mail - Layout and Responsive Design Practice -</h1>
            <a href='https://koohiiii.github.io/Ninja-Mail/'><h1>Visit Site</h1></a>
        </div>
        <div className='ninja-img-box'>
            <img src='/img/ninjamail.png' alt='ninja mail' />
        </div>
    </div>
}

function Todolist(){
    return <div className='todo-wrap-all'>
        <div className='todo-wrap-link'>
            <h1>ToDoList - Javascript and DOM Practice -</h1>
            <a href='https://koohiiii.github.io/Project-To-Do-List/'><h1>Visit Site</h1></a>
        </div>
        <div className='todo-img-box'>
            <img src='/img/todolist.png' alt='todolist' />
        </div>
    </div>
}

function Colorpick(){
    return <div className='color-wrap-all'>
        <div className='color-wrap-link'>
            <h1>Color Picker - Javascript and DOM Practice -</h1>
            <a href='https://koohiiii.github.io/Project-Color-Picker/'><h1>Visit Site</h1></a>
        </div>
        <div className='color-img-box'>
            <img src='/img/colorpick.png' alt='colorpicker' />
        </div>
    </div>
}