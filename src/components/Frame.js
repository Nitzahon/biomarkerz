import React, { Component } from 'react'
import Webcam from "react-webcam";
import SurveyComp from "./SurveyComp"
export default class Frame extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render() {

        const videoConstraints = {
            width: {max:1920},
            height: {max:1080},
            facingMode: "user"
          };
        return (
            <div className="frame row justify-content-md-center">
                       <div className="vid">
                           <Webcam
                        videoConstraints={videoConstraints}
                        width={960}
                        height={540}
                    />
                       </div>
                <div className="surv">
                    <SurveyComp/>
                </div>
            </div>
        )
    }
}
