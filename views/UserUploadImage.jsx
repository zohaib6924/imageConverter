import React, { useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { FileUploader } from 'react-drag-drop-files';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Container, Row, Col, Form } from 'react-bootstrap'
import InputField from '../components/reuseable/InputField';
import Button from '../components/reuseable/Button';
import { BiUpload } from 'react-icons/bi';


const fileTypes = ['JPG', 'PNG', 'GIF'];

const UserUploadImage = () => {
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
                            <span> {newFileName || file.name}</span> <span className='cursor' onClick={handleRemove}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 2.5C8.0875 2.5 2.5 8.0875 2.5 15C2.5 21.9125 8.0875 27.5 15 27.5C21.9125 27.5 27.5 21.9125 27.5 15C27.5 8.0875 21.9125 2.5 15 2.5ZM20.375 20.375C20.2594 20.4909 20.122 20.5828 19.9708 20.6455C19.8196 20.7083 19.6575 20.7406 19.4937 20.7406C19.33 20.7406 19.1679 20.7083 19.0167 20.6455C18.8655 20.5828 18.7281 20.4909 18.6125 20.375L15 16.7625L11.3875 20.375C11.1538 20.6087 10.8368 20.74 10.5062 20.74C10.1757 20.74 9.85872 20.6087 9.625 20.375C9.39128 20.1413 9.25997 19.8243 9.25997 19.4937C9.25997 19.3301 9.29221 19.168 9.35484 19.0168C9.41747 18.8656 9.50927 18.7282 9.625 18.6125L13.2375 15L9.625 11.3875C9.39128 11.1538 9.25997 10.8368 9.25997 10.5062C9.25997 10.1757 9.39128 9.85872 9.625 9.625C9.85872 9.39128 10.1757 9.25997 10.5062 9.25997C10.8368 9.25997 11.1538 9.39128 11.3875 9.625L15 13.2375L18.6125 9.625C18.7282 9.50927 18.8656 9.41747 19.0168 9.35484C19.168 9.29221 19.3301 9.25997 19.4937 9.25997C19.6574 9.25997 19.8195 9.29221 19.9707 9.35484C20.1219 9.41747 20.2593 9.50927 20.375 9.625C20.4907 9.74073 20.5825 9.87812 20.6452 10.0293C20.7078 10.1805 20.74 10.3426 20.74 10.5062C20.74 10.6699 20.7078 10.832 20.6452 10.9832C20.5825 11.1344 20.4907 11.2718 20.375 11.3875L16.7625 15L20.375 18.6125C20.85 19.0875 20.85 19.8875 20.375 20.375Z" fill="#FF0000" />
                            </svg></span>
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
        </>
    )
}

export default UserUploadImage
