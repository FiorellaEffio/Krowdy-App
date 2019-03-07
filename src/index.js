import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from "antd";
import { Popover, Button } from 'antd';
import { Modal, Steps } from 'antd';
import { Row, Col } from 'antd';

import "antd/dist/antd.css";
import "./index.css";
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  state = {
    date: null,
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleChange = date => {
    message.info(`Selected Date: ${date ? date.format("YYYY-MM-DD") : "None"}`);
    this.setState({ date });
  };

  render() {
    const { date } = this.state;
    const Step = Steps.Step;

    const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
    );
    
    return (
      <div>
        <div>
            <Row>
            <Col span={24}>col-24</Col>
            </Row>
            <Row>
            <Col span={1}>col-1</Col>
            <Col span={23}>col-23</Col>
            </Row>
        </div>
      <div style={{ width: 400, margin: "100px auto" }}>
        <DatePicker onChange={this.handleChange} />
        <div style={{ marginTop: 20 }}>
          Selected Date: {date ? date.format("YYYY-MM-DD") : "None"}
        </div>
        <Popover content={content} title="Title">
          <Button type="primary">Hover me</Button>
        </Popover>,
        mountNode
        <div>
            <Button type="primary" onClick={this.showModal}>
                Open Modal
            </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <video controls="controls"></video>
          
          <Steps progressDot current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>,
        </Modal>
        
      </div>
      </div>
      </div>
      
    );
  }
  showVideo() {
    let p = navigator.mediaDevices.getUserMedia({ audio: true, video: true });

    p.then(function(mediaStream) {
      let video = document.querySelector('video');
      video.srcObject=mediaStream;
      video.onloadedmetadata = function(e) {
         video.play();
      };
    });


    p.catch(function(err) { console.log(err.name); });
  }
  
  componentDidMount() {
    this.showVideo();
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();