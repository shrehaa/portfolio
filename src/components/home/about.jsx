import './about.scss'


const About = () => {
  return (
    <div className='container'>
    <div className='left'>
      <div className='icons'>
        <i className='fa-brands fa-facebook-f'/>
        <i className='fa-brands fa-instagram'/>
        <i class="fa-brands fa-github"></i>
        
      </div>
      <div className='content'>
        <h2>Hi! I am <span>Shreha Chowdhury</span></h2>
        <h1>Frontend Developer</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione nihil adipisci sapiente vel voluptatibus doloribus, maiores in consequatur facilis dignissimos saepe libero soluta cumque nulla iste nemo possimus dicta amet?</p>

      </div>
    </div>
    <div className='right'></div>
    <div className='design'>
      <div className='circle'></div>
      <div className='circle'></div>
    </div>
  {/* <section ><Navbar/></section>
  <section><a>About</a></section>
  <section><a>Skills</a></section>
  <section><a>Projects</a></section>
  <section><a>Work Experience</a></section>
  <section><a>Contact Us</a></section> */}
  
 
</div>
  )
}

export default About