import React, { useState } from 'react';
import './css/User.css'
import 'react-photo-view/dist/react-photo-view.css';
import { FileUploader } from 'react-drag-drop-files';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Container, Row, Col, Form } from 'react-bootstrap'
import InputField from '../view/components/InputField';
import Button from '../view/components/Button';
import { BiUpload } from 'react-icons/bi';
import Perform from './perform';
import { svgIcon } from './constant/svg/icons';

const fileTypes = ['JPG', 'PNG', 'GIF'];

const UserImage = () => {
    const [file, setFile] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [newFileName, setNewFileName] = useState('');

    //handle-file
    const handleChange = (file) => {
        setFile(file);
        const imageURL = URL.createObjectURL(file);
        setImageURL(imageURL);
    };

    const handleRemove = () => {
        setFile(null);
        setNewFileName('');
    };

    const handleFileNameChange = (event) => {
        setNewFileName(event.target.value);
    };


    return (
        <>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='upload-box mt-4 mb-2'>
                            <FileUploader classes="drop_area" handleChange={handleChange} name='file' types={fileTypes} />
                            <span className='icon-style'>{<BiUpload />}</span>
                        </div>
                    </Col>
                    {file && (<Col lg={12}>
                        <div className='d-flex justify-content-between align-items-center drop-details px-2'>
                            <span> {newFileName || file.name}</span> <span className='cursor' onClick={handleRemove}> {svgIcon.close} </span>
                        </div>
                    </Col>)}
                </Row>
                <Row className='my-4 '>
                    {file && (<Col lg={3}>
                        <div className='img-box'>
                            <PhotoProvider>
                                <div className='overlay'>
                                    <PhotoView src={imageURL} >
                                        <Button data={'Preview'}></Button>
                                    </PhotoView>
                                </div>
                                <img className='img-fluid' src={file && imageURL} alt='Uploaded Image' />
                            </PhotoProvider>
                        </div>
                    </Col>)}
                </Row>
                <form action='#'>
                    <Row>
                        <Col lg={4}>
                            <div className=' d-flex align-items-center '>
                                <label className='lable-font' htmlFor="">Title:</label>
                                <InputField
                                    type='text'
                                    class={'field-style ms-2'}
                                    placeholder='Image Title'
                                    value={newFileName}
                                    onChange={handleFileNameChange}
                                />

                            </div>
                            <p className='lable-font mb-0'>License</p>
                            <ul className='check-list'>
                                <li><Form.Check id='CCD' aria-label="option 1" defaultChecked /> <label htmlFor="CCD" className='ms-2 cursor'>CCD</label></li>
                                <li><Form.Check id='CCBY' aria-label="option 1" /> <label htmlFor="CCBY" className='ms-2 cursor'>CCBY</label></li>
                                <li><Form.Check id='Proprietary' aria-label="option 1" /><label htmlFor="Proprietary" className='ms-2 cursor'>Proprietary</label> </li>
                            </ul>
                            <Button type={'submit'} class={'btn-style'} data={'Upload'} icon={<BiUpload className='fs-5' />}></Button>
                        </Col>
                    </Row>
                </form>
            </Container>
            <Perform />
        </>
    )
}

export default UserImage
