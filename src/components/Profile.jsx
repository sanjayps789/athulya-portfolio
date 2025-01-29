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
                                      href='https://drive.google.com/drive/folders/1oXOQakz7y6kiU58i-CGNpgy7NphzzJQc'
                                       variant="light" className='px-lg-5 ps-2 fw-bold py-2 text-uppercase fs-6'>Download CV</Button>
                                   <Link target='_blank' to='http://www.linkedin.com/in/athulyamol-p-l-897982259'> <i style={{ fontSize: '45px' }} className="fa-brands fa-linkedin  ps-lg-5 ps-3  text-white"></i></Link>
                                    <Link  target='_blank' to={'https://www.figma.com/design/qlpk2SObfSQKGsagzA11t6/ATHULYAMOL---WORKS?t=IbzxbWSNLdj5YYPl-0'}  style={{ fontSize: '38px' }}>
                                        <i  style={{ fontSize: '33px' }} className="fa-brands fa-figma fw-bold ms-lg-3 mx-2 px-2 py-1 rounded-2 text-dark bg-white"></i>
                                        </Link>
                                    <Link target='_blank' to='https://www.behance.net/athulyamolpl'><i style={{ fontSize: '45px' }} className="fa-brands fa-behance-square  ps-lg-4 ps-0  text-white"></i></Link>
                                </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Profile