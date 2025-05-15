import './Components-CSS/contact.css'

export const Contact = () => {
    return (
        <div className='contact'>
            <div classname='contact-left'><p className='archivo contact-text'>Contact Me:</p>
                <div><a href="https://mail.google.com/mail/?view=cm&fs=1&to=divyjain005@gmail.com">
                    <img src="gmail-svgrepo-com.svg"></img>
                </a>
                <a href="https://www.linkedin.com/in/divy-jain-a6752b221/">
                    <img src="linkedin-color-svgrepo-com.svg"></img>
                </a></div>
            </div>
            <div classname='contact right'></div>
            <p className='details'>
                Gmail: divyjain005@gmail.com
                <br></br>
                My Linkedin : Divy Jain
            </p>
        </div>
    )
}
