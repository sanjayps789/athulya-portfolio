import React from 'react'
import { Button } from 'react-bootstrap'
import image from '../assets/athulya_about.png'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div id='home' style={{ paddingTop:'10px', height: '80vh',background:'linear-gradient(to right, black , #34393c 80%)'}} className='w-100 d-flex align-items-center justify-content-center text-black mt-lg-0'>
            <div style={{width:'90%'}} className="container py-5 ">
               <div className="row w-100 d-flex align-items-center justify-content-center">
                    <div className="col-lg-4 d-flex align-items-center justify-content-center">
                        <img className='img-fluid mt-5' style={{ width: '350px ', height: 'auto', }} src={image} alt="image" />
                    </div>
                    <div className="col-lg-6 d-flex align-items-center flex-column py-lg-0 pb-5 mb-lg-0 mb-5">
                        <div>
                            <h1 style={{ fontSize: '60px', textShadow: '3px 1px 5px black' }} className='fw-bold text-white main-heading'>HI, I'M ATHULYA</h1>
                            <p style={{ fontSize: '30px' }} className='fw-bold text-white py-2'> UI/UX Designer</p>
                            <div className="d-flex justify-content-start   align-items-center">
                                    <Button 
                                     target='_blank'
                                      href='https://drive.google.com/file/d/1Sz2mghxfcCxvT7R2Y8lFIbBfjANrTI1T/view?usp=sharing'
                                       variant="light" className='px-5 fw-bold py-2 text-uppercase'>Download CV</Button>
                                    <i className="fa-brands fa-linkedin fs-1 ps-lg-5 ps-3  text-white"></i>
                                </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Profile