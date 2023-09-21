import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import StyleField from './components/StyleFields'
import Button from './components/Button'
import img from '../src/assets/images/b.jpg'
import SelectMenu from './components/SelectMenu'
import { svgIcon } from './constant/svg/icons'

const Perform = () => {
    return (
        <>
            <Container className='py-4'>
                <hr className='border-style mt-4' />
                <h4 className='font-h6'>Perform Conversions below:</h4>
                <Row className='font-lable gy-2'>
                    <strong>Change Size:</strong>
                    <Col lg={2} md={4}>
                        <label htmlFor="">Width</label>
                        <StyleField />
                    </Col>
                    <Col lg={2} md={4}>
                        <label htmlFor="">Height</label>
                        <StyleField />
                    </Col>
                </Row>
                <Row className='mt-3 font-lable gy-2'>
                    <strong>Crop Image:</strong>
                    <Col lg={2} md={4}>
                        <label htmlFor="">Height</label>
                        <StyleField />
                    </Col>
                    <Col lg={2} md={4}>
                        <label htmlFor="">Width</label>
                        <StyleField />
                    </Col>
                    <Col lg={2} md={4}>
                        <label htmlFor="">Position-X</label>
                        <StyleField />
                    </Col>
                    <Col lg={2} md={4} >
                        <label htmlFor="">Position-Y</label>
                        <StyleField />
                    </Col>
                </Row>
                <Row className='mt-3 font-lable'>
                    <Col lg={2} md={4}>
                        <strong>Convert Imgae to:</strong>
                        <SelectMenu />
                        <Button class={'render-button mt-4'} data={'Render Image'}></Button>
                    </Col>
                </Row>
                <hr className='border-style mt-5' />
                <Row>
                    <h5 className='font-h6'>Download Rendered Image:</h5>
                    <Col lg={12}>
                        <div className='d-flex justify-content-between align-items-center bg-back-color'>
                            <div className='d-flex align-items-center p-2'>
                                <span><img className='img-control' src={img} alt="" /></span>
                                <span className='ps-3 span-font'>title.png</span>
                            </div>

                            <div className='d-flex align-items-center p-2'>
                                <span> <Button class={'pre-btn'} data={'Preview'}> </Button> </span>
                                <span className='mx-3 cursor'>  {svgIcon.download} </span>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Perform
