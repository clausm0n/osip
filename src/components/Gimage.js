import React from 'react'
import {Container, Col, Image, Row, Card, Button} from 'react-bootstrap'
import { SRLWrapper } from "simple-react-lightbox";
export default function Gimage(props){
    const options = {
        settings: {
            autoplaySpeed: 0,
            disableWheelControls: true,
            disablePanzoom: true
        },
        caption: {},
        buttons: {
            backgroundColor: 'rgba(30,30,36,0.8)',
            iconColor: 'rgba(255, 255, 255, 0.8)',
            iconPadding: '10px',
            showAutoplayButton: false,
            showCloseButton: false,
            showDownloadButton: false,
            showFullscreenButton: false,
            showNextButton: false,
            showPrevButton: false,
            showThumbnailsButton: false,
            size: '40px'
        },
        thumbnails: {showThumbnails: false},
        progressBar:{}
      }
    return(
                        <Card className={"Card-root"} style={{backgroundColor: 'black'}}>
                            <SRLWrapper options={options}>
                                <img className={"Card-image"} variant="top" src={props.path} alt={props.title}/>
                            </SRLWrapper>
                            <Card.Body>
                                <Card.Title className="Title">{props.title}</Card.Title>
                                    <Card.Text className="Card-content">
                                        <p>{props.desc}
                                        <br></br>
                                        <br></br>
                                        {props.desc2}
                                        </p>
                                    </Card.Text>
                                
                            </Card.Body>
                        </Card>
    );
}