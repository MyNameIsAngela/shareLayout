import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="demo">
                demo
            </div>
        );
    }
}

ReactDOM.render(<Demo />, document.getElementById('root'))