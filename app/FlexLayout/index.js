import React, { Component } from 'react'
import './index.scss'

class Layout extends React.Component {

    render() {
        console.log(this.props.children);
        let hasSider = this.props.children && (this.props.children instanceof Array)&&this.props.children.some(function (elem) {
            return elem.type.name == "Sider";
        })
        hasSider = hasSider ? "has-sider" : "";
        return (
            <div className={"layout " + hasSider}>{this.props.children}</div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">{this.props.children}</div>
        );
    }
}

class Sider extends React.Component {
    render() {
        return (
            <div className="sider">{this.props.children}</div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div className="content">{this.props.children}</div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">{this.props.children}</div>
        );
    }
}

export default React.createClass({
    render() {
        return (
            <div className="flex-layout">
                <Layout>
                    <Header>header</Header>
                    <Layout>
                        <Sider>left sidebar</Sider>
                        <Content>main content</Content>
                        <Sider>right sidebar</Sider>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
            </div>
        );
    }
})
