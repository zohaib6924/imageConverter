import React, { useState, createRef, useEffect } from "react";
import { Container, Row, Col, Tab, Tabs,Button } from 'react-bootstrap';
import StyleFields from '../components/reuseable/StyleFields';
import { Cropper } from "react-cropper";
import { Link } from "react-router-dom";
import "cropperjs/dist/cropper.css";
import Modal from 'react-bootstrap/Modal';

const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";


const PerformConversions = () => {
  const [show, setShow] = useState(false);
  const [key, setKey] = useState('Crop');
  const [imageFormat, setImageFormat] = useState('png');
  const [image, setImage] = useState(defaultSrc);
  const [cropperData, setCropperData] = useState({
    width: null,
    height: null,
    x: null,
    y: null,
  });
  const [cropData, setCropData] = useState(null);
  const [targetWidth, setTargetWidth] = useState(""); // Input field for target width
  const [targetHeight, setTargetHeight] = useState(""); // Input field for target height
  const [resolution, setResolution] = useState({ x: null, y: null }); // Resolution state
  const cropperRef = createRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      const cropBoxData = cropperRef.current?.cropper.getCropBoxData();
      setCropperData({
        width: cropBoxData.width,
        height: cropBoxData.height,
        x: cropBoxData.left,
        y: cropBoxData.top,
      });
      const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas();
      if (croppedCanvas) {
        setCropData(croppedCanvas.toDataURL());
      }
    }
  }, [image]);


  useEffect(() => {
    const newWidth = parseInt(targetWidth);
    const newHeight = parseInt(targetHeight);
    cropperRef.current?.cropper.setCropBoxData({
      width: newWidth,
      height: newHeight,
    });

    // Calculate resolution here and update state
    const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas();
    if (croppedCanvas && newWidth && newHeight) {
      const croppedWidth = croppedCanvas.width;
      const croppedHeight = croppedCanvas.height;
      const resolutionX = croppedWidth / newWidth;
      const resolutionY = croppedHeight / newHeight;
      setResolution({ x: resolutionX, y: resolutionY });
    } else {
      setResolution({ x: null, y: null });
    }
  }, [image, targetWidth, targetHeight]);



  const onCropChange = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      const cropBoxData = cropperRef.current?.cropper.getCropBoxData();
      setCropperData({
        width: cropBoxData.width,
        height: cropBoxData.height,
        x: cropBoxData.left,
        y: cropBoxData.top,
      });
      const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas();
      if (croppedCanvas) {
        const croppedWidth = croppedCanvas.width;
        const croppedHeight = croppedCanvas.height;
        const resolutionX = croppedWidth / targetWidth;
        const resolutionY = croppedHeight / targetHeight;
        setResolution({ x: resolutionX, y: resolutionY });
        setCropData(croppedCanvas.toDataURL());
      }
    }
  };

  function limitNumberToNDigits(number, n) {
    var multiplier = Math.pow(10, n);
    return Math.floor(number * multiplier) / multiplier;
  }

  const handleDownload = () => {
    if (cropData) {
      const blob = dataURLtoBlob(cropData);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `cropped_image.${imageFormat}`; // Use selected format
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  function dataURLtoBlob(dataURL) {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }


  return (
    <>
      <Container className="font-style">
        <h4 className='my-3'>Perform Conversions :</h4>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="my-4 border-0 tab-style gy-5"
        >
          <Tab eventKey="Crop" title="Crop">
            <Row className='justify-content-between'>
              <Col lg={7}>
                <Cropper
                  ref={cropperRef}
                  zoomTo={0.5}
                  src={image}
                  minCropBoxHeight={10}
                  minCropBoxWidth={10}
                  background={false}
                  responsive={true}
                  autoCropArea={1}
                  checkOrientation={false}
                  guides={true}
                  crop={onCropChange}
                />

              </Col>
              <Col className='border-line font-style' lg={3}>
                <div className='p-5'>
                  <h2>Crop Image</h2>
                  <div className='mb-2'>
                    <label htmlFor="">Height</label>
                    <StyleFields value={limitNumberToNDigits(cropperData.height, 3)} />

                  </div>
                  <div className='mb-2'>
                    <label htmlFor="">Width</label>
                    <StyleFields value={limitNumberToNDigits(cropperData.width, 3)} />
                  </div>
                  <div className='mb-2'>
                    <label htmlFor="">Position-X</label>
                    <StyleFields value={limitNumberToNDigits(cropperData.x, 3)} />
                  </div>
                  <div className='mb-2'>
                    <label htmlFor="">Position-Y</label>
                    <StyleFields value={limitNumberToNDigits(cropperData.y, 3)} />
                  </div>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="Resize" title="Resize">
            <Row className='justify-content-between'>
              <Col lg={7}>
                <div className="max-image">
                  {cropData && (
                    <img
                      className=" max-image"
                      src={cropData}
                      alt="cropped"
                    />
                  )}
                </div>

              </Col>
              <Col className='border-line' lg={3}>
                <div className='p-5'>
                  <h2>Image Resizing</h2>
                  <div className='mb-2'>
                    <label htmlFor="">Height</label>
                    <div className='d-flex align-items-center position-relative'>
                      <input type="number" className='input-style' placeholder="0" value={targetHeight} onChange={(e) => {
                        setTargetHeight(e.target.value)
                        onCropChange();
                      }
                      } /><span className='pixel-lable'>px</span>
                    </div>
                  </div>
                  <div className='mb-2'>
                    <label htmlFor="">Width</label>
                    <div className='d-flex align-items-center position-relative'>
                      <input type="number" className='input-style' placeholder="0" value={targetWidth} onChange={(e) => {
                        setTargetWidth(e.target.value)
                        onCropChange();
                      }
                      } /><span className='pixel-lable'>px</span>
                    </div>
                  </div>
                  <div className='mb-3'>
                    <label htmlFor="">Resolution</label>
                    <div className='d-flex align-items-center position-relative'>
                      <span className='input-style'> {resolution.x !== null ? resolution.x.toFixed(2) : "00"} x{" "}
                        {resolution.y !== null ? resolution.y.toFixed(2) : "00"}</span><span className='pixel-lable'>px</span>
                    </div>

                  </div>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="Type Conversion" title="Type Conversion">
            <Row className='justify-content-between'>
              <Col lg={7}>
                {cropData && (
                  <img
                    className=" max-image"
                    src={cropData}
                    alt="cropped"
                  />
                )}
              </Col>
              <Col className='border-line' lg={3}>
                <div className='p-5'>

                  <button  onClick={handleShow}> Render image</button>
                  <h5>Type Conversion</h5>
                  <p className="mb-0">Convert Imgae to:</p>
                  <div className="position-relative">
                    {/* <span className="pixel-lable hight"></span> */}
                    <select className="custom-select" onChange={(e) => setImageFormat(e.target.value)} value={imageFormat}>
                      <option value="png">PNG</option>
                      <option value="jpg">JPG</option>
                      <option value="svg">svg</option>
                      <option value="webp">webp</option>
                    </select>
                  </div>
                </div>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid max-hight" src={cropData} alt="" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleDownload} variant="primary">Download</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PerformConversions




