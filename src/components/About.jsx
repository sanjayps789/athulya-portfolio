import React from 'react'
import image from '../assets/athulya_about.png'
function About() {
    return (
        <div  id='about' style={{minHeight:'90vh',background:'linear-gradient(to right, black , #34393c 80%)' }} className=' d-flex align-items-center justify-content-center w-100'>

            <div style={{width:'90%'}} className='container d-flex align-items-center justify-content-center'>
                <div  className="row w-100 d-flex align-items-center justify-content-center">
                    <h1 className='text-white fw-bold text-center py-4'>About Me</h1>
                    <div className="col-lg-8">
                    <p style={{textAlign:'justify', fontSize:'19px',lineHeight:'2',width:'90%'}} className='description text-white text-start w-100'>
                    I am a dedicated and detail-oriented UI/UX Designer with 1 year of professional experience creating user-centric designs that enhance digital experiences. Skilled in wireframing, prototyping, and usability testing, I excel at translating complex concepts into intuitive and visually appealing interfaces. Proficient in tools like Figma and Adobe XD, I am passionate about designing seamless user journeys that meet both business objectives and user needs. Eager to continue growing my expertise and contributing to innovative projects in dynamic environments.</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default About