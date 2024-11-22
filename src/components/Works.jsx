import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import works from '../works.js'
import { Link } from 'react-router-dom'
function Works() {
    const [workData, setWorkData] = useState(works)

    const handleData = () => {
        setWorkData(works)
    }

    useEffect(() => {
        handleData()
    },[])
    return (
        <div id='works' style={{minHeight:'80vh',background:'linear-gradient(to right, black , #34393c 80%)'}} className='w-100 d-flex align-items-center justify-content-center bg-black flex-column'>
            <h1 className='text-white fw-bold py-4'>My Works</h1>
            <div style={{ width: '90%' }} className="container">
                <div className="row d-flex align-items-center justify-content-center py-5 mb-5">
                   { workData.length > 0?
                   workData.map((item,index)=>(
                    <div key={index} className="col-lg-3 col-md-4 d-flex align-items-center justify-content-center ">
                    <Card  className='card-container mb-5   rounded-4' 
                    style={{
                         width: '18rem',
                          height: '20rem'}}>
                        <Card.Img style={{height:'180px'}} className='img-fluid rounded' variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title style={{color:'white',textShadow:'3px 1px 2px black',fontSize:'18px'}} className='fw-bold text-center text-uppercase'>{item?.title}</Card.Title>
                            <div className='text-center py-2 '>
                                <Link style={{boxShadow:'0px 4px 5px white '}} className='card-btn text-decoration-none btn btn-outline-light px-5 ' type='button' target="_blank" to={item?.url}>
                                   <span className='d-flex align-items-center text-white '>
                                        View Now
                                        <i className="fa-solid fa-arrow-right fw-bold text-white px-3"></i>
                                   </span>
                                </Link>
                            </div>
                            <i className="fa-solid "></i>
                        </Card.Body>
                    </Card>
                </div>
                   )):<div><h1>No Data Found</h1></div> }
                </div>
            </div>
        </div>
    )
}

export default Works