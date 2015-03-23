/** @jsx React.DOM */
var React = require('react');

var pairings = {
    Angel: {
        Brandon: 0,
        David: 1,
        Evan: 2,
        John: 3,
        Juan: 4,
        Julie: 5,
        Noah: 1
    },
    Brandon: {
        David: 1
    },
    David: {
        Juan: 1,
        Noah: 1
    },
    Evan: {
        Julie: 1,
        Sang: 1,
        Will: 1
    },
    John: {
        Sang: 2,
        Will: 1
    },
    Juan: {
        Stefania: 2
    },
    Julie: {
        Kevin: 2
    },
    Kevin: {
        Tracy: 1
    },
    Noah: {},
    Ryan: {},
    Sang: {},
    Stefania: {},
    Tracy: {}
}

var PairCount = React.createClass({
    render: function() {
        var count = pairings[this.props.x][this.props.y] || 0;

        return (
            <div className={'pair-count paired-' + count}>{count}</div>
        );
    }
});

module.exports = PairCount;
