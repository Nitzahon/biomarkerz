import React, { Component } from 'react';
import {ReactMic} from "react-mic";
import Webcam from "react-webcam";
import SurveyComp from "./SurveyComp";
import Dictaphone from "./Dictaphone"
import WebcamStreamCapture from './WebcamStreamCapture';
export default class Frame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            record:false
        }
    }
    componentDidMount() {
        var video = document.querySelector('video');
        video.addEventListener('loadedmetadata', event => {
            console.log(video.videoWidth, video.videoHeight)

        });
        this.toggleClass();

     }
     
     onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
      }
     onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
      }
      toggleClass=()=> {
        const currentState = this.state.record;
        this.setState({ record: !currentState });
    };
    
    render() {

        const videoConstraints = {
            width: { max: 1280 },
            height: { max: 720 },
            facingMode: "user"
        };
        return (
            <div>
                <div className="frame row justify-content-md-center">
                    <div className="vid">
                        <Webcam id="videmo"
                            audio={false}
                            videoConstraints={videoConstraints}
                            width={640}
                            height={360}
                            
                        />

                        

                    </div>
                    <div className="surv">
                        <SurveyComp />
                    </div>
    
                </div>
                <div onClick={this.toggleClass}>
                <ReactMic   
                            record={this.state.record}
                            visualSetting="frequencyBars"
                            className="sound-wave"
                            onStop={this.onStop}
                            onData={this.onData}
                            strokeColor="#FF0000"
                            // backgroundColor="#000000" 
                            />
                </div>
                <div className="dict">
                    <Dictaphone/>
                </div>
                <WebcamStreamCapture/>
            </div>
        )
    }
}
