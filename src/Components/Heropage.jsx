import './Components-CSS/heropage.css'
export default function Heropage() {
    return (
        <div className='hero'>
            <div className='hero-page-left nothing-you-could-do-regular'>
                Hey There, I am <br></br>
                Divy Kumar Jain
                <br></br>
                <p className ="paragraph archivo">
                I am Divy Kumar Jain, currently studying in Newton School of Technology, Rishihood University. I am highly interested in coding and have good management skills. I am a very organized individual and looking forward to learn more about Technology.
                </p>
            </div>
            <div className='hero-page-right'>
            <img src="public/IMG_0131.jpeg" className='photo'/>

            </div>
        </div>
    )
}
