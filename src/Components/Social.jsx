import './Components-CSS/social.css'

 const Social = () => {
  return (
    <div className='Social scroll-container'>
       <div className='headingS archivo'>Socials</div>

       <div className='socialicon scroll-content'>
        <a href="https://github.com/divyjain05">
            <img src='github-142-svgrepo-com.svg'></img>
        </a>
        <a href="https://www.linkedin.com/in/divy-jain-a6752b221/">
            <img src='linkedin-svgrepo-com.svg'></img>
        </a>
        <a href="https://leetcode.com/u/divyjain_/">
            <img src='leetcode-svgrepo-com.svg'></img>
        </a>
        <a href="https://portfolio-nine-beta-75.vercel.app/">
             <img src='resume-portfolio-svgrepo-com.svg'></img>
         </a>


       </div>
    </div>
  )
}

export default Social