import React, { Component } from 'react';
import {ReactMic} from "react-mic";
import Webcam from "react-webcam";
import SurveyComp from "./SurveyComp";
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
        this.setState({record:true});

     }
    render() {

        const videoConstraints = {
            width: { max: 1280 },
            height: { max: 720 },
            facingMode: "user"
        };
        return (
            <div className="frame row justify-content-md-center">
                <div className="vid">
                    <Webcam id="videmo"
                        audio={false}
                        videoConstraints={videoConstraints}
                        width={640}
                        height={360}
                    />
                    <ReactMic
                        record={this.state.record}
                        className="sound-wave"
                        onStop={this.onStop}
                        onData={this.onData}
                        strokeColor="#FFFFFF"
                        backgroundColor="#000000" />
                </div>
                <div className="surv">
                    <SurveyComp />
                </div>
            </div>
        )
    }
}
