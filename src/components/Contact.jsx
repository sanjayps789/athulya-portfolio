import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <div id='contact' style={{ height: '50vh',background:'linear-gradient(to right, #34393c, black)' }} className=' w-100 shadow'>
            <h1 className='text-white fw-bold py-5 text-center'>Contact Me</h1>
            <div style={{ width: '90%' }} className='container'>
                <div className="row d-flex align-items-center justify-content-evenly w-100 ">
                    <div className="col-lg-7 d-flex align-items-center justify-content-center">
                       <div>
                            <div className='mb-2 '>
                                <i className="fa-solid fa-phone text-white"></i>
                                <span className='ms-2 text-white '>+91 8075395258</span>
                            </div>
                            <div >
                                <i className="fa-solid fa-envelope me-2 text-white"></i>
                                <span className='ms-2 text-white'>athulyamol1225@gmail.com</span>
                            </div>
                       </div>
                    </div>
                    <div className="col-lg-5 pt-3 ms-lg-0 ms-4">
                        <div className='d-flex align-items-center justify-content-lg-center justify-content-start '>
                            <Link  to='https://www.linkedin.com/in/athulyamol-p-l-897982259/'><i className="fa-brands fa-linkedin text-white fs-3"></i></Link>
                            <i className="fa-brands fa-github text-white fs-3 mx-3"></i>
                            <i className="fa-brands fa-instagram text-white fs-3"></i>
                        </div>
                    </div>
                </div>
                <footer className='text-white text-center py-lg-3 pt-5 mt-lg-5 '> Athulya © {new Date().getFullYear()}. All rights reserved</footer>
            </div>
        </div>
    )
}

export default Contact