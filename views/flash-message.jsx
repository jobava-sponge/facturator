"use strict";
let React = require('react'),
  Layout = require('./layout');

let FlashMessage = React.createClass({
    render() {
        if (this.props.message && this.props.message.length) {
            return (
                <div className="row">
                      <div className="medium-6 medium-centered columns">
                        <div className="alert-box alert" data-alert>
                          {this.props.message}
                          <a href="#" className="close">&times;</a>
                        </div>
                      </div>
                </div>
                 )
        } else {
            return false;
        }
    }
});

module.exports = FlashMessage;

