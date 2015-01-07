/** @jsx React.DOM */
var React = require('react');

var Name = React.createClass({
    render: function() {
        return (
            <div className="name">{this.props.name}</div>
        );
    }
});

module.exports = Name;
