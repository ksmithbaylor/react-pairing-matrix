/** @jsx React.DOM */
var React = require('react');
var Name = require('./components/Name');
var PairCount = require('./components/PairCount');

var names = [
    'Angel', 'Brandon', 'David', 'Evan', 'John', 'Juan', 'Julie', 'Kevin',
    'Noah', 'Ryan', 'Sang', 'Stefania', 'Tracy', 'Will'
]


var App = React.createClass({
    render: function() {
        var len = names.length;
        var xs = []

        for (var i = 0; i < len; i++) {
            if (i > 0) {
                xs.push(<Name key={names[i] + '0'}name={names[i]} />);
            } else {
                xs.push(<div className="invisible" />);
            }
            for (var j = 0; j < i; j++) {
                xs.push(<PairCount key={names[j] + names[i]} x={names[j]} y={names[i]} />);
            }
            xs.push(<Name key={names[i] + '1'}name={names[i]} />);
            xs.push(<br />);
        }

        return (
            <div>{xs}</div>
        );
    }

});

module.exports = App;
