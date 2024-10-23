import './Home.css';
import logo from './logo.svg';
export default function Home(){
    return <div className='home-wrap-all'>
        <div className='home-main-content'>
            <div>
                <h1>Nutthakun | Web Portfolio</h1>
                <p>FOR WEB CAREER AND DEV JURNEY create with React</p>
            </div>
            <div className='img-box'>
                <img src={logo} alt='logo-react' />
            </div>
        </div>
    </div>
}