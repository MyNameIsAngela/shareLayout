import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss'

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="demo">
                <div className="header">header</div>
                <div className="main">
                <div className="sider">sider</div>
                <div className="content">content</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, document.getElementById('root'))