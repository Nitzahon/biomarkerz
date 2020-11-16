import React, { Component } from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
export default class SurveyComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyJSON: {
        pages: [
          {
            name: "page1",
            elements: [
              {
                type: "radiogroup",
                name: "question1",
                title: "Can you see and hear yourself?",
                hideNumber: true,
                choices: [
                  { value: "Everything is working", text: "Everything is working" },
                  { value: "Nothing is working", text: "Nothing is working" },
                  { value: "Just the audio works", text: "Just the audio works" },
                  { value: "Just the video works", text: "Just the video works" },
                ],
              },
            ],
          },
        ],
        showQuestionNumbers: "off",
        pagePrevText: "Back",
        pageNextText: "Next",
      }
    };
    // this.sendDataToServer = this.sendDataToServer.bind(this)
  }

  sendDataToServer = (survey) => {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
    this.setState({
      isCompleted: true,
    });
  };

  render() {
    Survey.StylesManager.applyTheme("bootstrap");

    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={this.state.surveyJSON}
        showCompletedPage={false}
        onComplete={this.sendDataToServer}
      />
    ) : null;

    var onSurveyDone = this.state.isCompleted ? (
      <div className="comp">
        <h1>DONE</h1>
      </div>
    ) : null;
    return (
      <div>
        {surveyRender}
        {onSurveyDone}
      </div>
    );
  }
}
