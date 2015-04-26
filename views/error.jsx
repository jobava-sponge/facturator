"use strict";
let React = require('react'),
    Layout = require('./layout');

let ErrorPage = React.createClass({
    render: function() {
        return (
            <Layout>
                <h1>{this.props.message}</h1>
                <h2>{this.props.error.status}</h2>
                <pre>{this.props.stack}</pre>
            </Layout>
            )
    }
});

module.exports = ErrorPage;

