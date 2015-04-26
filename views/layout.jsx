"use strict";

var React = require('react'),
    Navbar = require('./navbar');

var Layout = React.createClass({
    propTypes: {
        title: React.PropTypes.string
    },

    render: function() {
        return (
            <html>
                <head>
                  <title>{this.props.title}</title>
                  <meta charset="utf-8"/>
                  <meta name="viewport" content="width=device-width, initial-scale=0.75"/>
                  <link rel="stylesheet" href="/components/fontawesome/css/font-awesome.min.css" />
                  <link rel="stylesheet" href="/components/foundation/css/normalize.css" />
                  <link rel="stylesheet" href="/components/foundation/css/foundation.css" />
                  <link rel="stylesheet" href="/stylesheets/style.css" />
                  <script src="/components/modernizr/modernizr.js" />
                </head>
                <body>
                    {/* <Navbar title={this.props.title}/> */}
                  {this.props.children}

                  <script src="/components/jquery/dist/jquery.js" />
                  <script src="/components/fastclick/lib/fastclick.js" />
                  <script src="/components/foundation/js/foundation.js" />

                  <script dangerouslySetInnerHTML={{__html: `
                      $(document).foundation();
                  `}}/>
                </body>
              </html>
            );
    }
});

module.exports = Layout;
