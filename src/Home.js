import {React,useState} from 'react'
import Button from './Button';
import './Home.css';

function Home() {
    const [isMobile, setIsMobile] = useState(false)
  return (
    <div className="Home">
      <h1>
        Welcome to {(window.innerWidth < 700) ? <br/> : window.innerWidth } XY
      </h1>
      <div className='center-home'>
        <Button text={'Singleplayer'} />
        <Button text={'Multiplayer'} />
        
      </div>
      
    </div>
  )
}

export default Home
