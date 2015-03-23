(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./app/main.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
var App = require('./App.js');

React.render(React.createElement(App, null), document.body);

},{"./App.js":"/Users/ksmith/main/projects/current/pairing-matrix/app/App.js","react":"react"}],"/Users/ksmith/main/projects/current/pairing-matrix/app/App.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
var Name = require('./components/Name');
var PairCount = require('./components/PairCount');

var names = [
    'Angel', 'Brandon', 'David', 'Evan', 'John', 'Juan', 'Julie', 'Kevin',
    'Noah', 'Ryan', 'Sang', 'Stefania', 'Tracy', 'Will'
]

var pairings = {
    Angel: {
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

var App = React.createClass({displayName: "App",
    render: function() {
        var len = names.length;
        var xs = []

        for (var i = 0; i < len; i++) {
            if (i > 0) {
                xs.push(React.createElement(Name, {key: names[i] + '0', name: names[i]}));
            } else {
                xs.push(React.createElement("div", {className: "invisible"}));
            }
            for (var j = 0; j < i; j++) {
                xs.push(React.createElement(PairCount, {key: names[j] + names[i], x: names[j], y: names[i]}));
            }
            xs.push(React.createElement(Name, {key: names[i] + '1', name: names[i]}));
            xs.push(React.createElement("br", null));
        }

        return (
            React.createElement("div", null, xs)
        );
    }

});

module.exports = App;

},{"./components/Name":"/Users/ksmith/main/projects/current/pairing-matrix/app/components/Name.js","./components/PairCount":"/Users/ksmith/main/projects/current/pairing-matrix/app/components/PairCount.js","react":"react"}],"/Users/ksmith/main/projects/current/pairing-matrix/app/components/Name.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');

var Name = React.createClass({displayName: "Name",
    render: function() {
        return (
            React.createElement("div", {className: "name"}, this.props.name)
        );
    }
});

module.exports = Name;

},{"react":"react"}],"/Users/ksmith/main/projects/current/pairing-matrix/app/components/PairCount.js":[function(require,module,exports){
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

var PairCount = React.createClass({displayName: "PairCount",
    render: function() {
        var count = pairings[this.props.x][this.props.y] || 0;

        return (
            React.createElement("div", {className: 'pair-count paired-' + count}, count)
        );
    }
});

module.exports = PairCount;

},{"react":"react"}]},{},["./app/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvbWFpbi5qcyIsImFwcC9BcHAuanMiLCJhcHAvY29tcG9uZW50cy9OYW1lLmpzIiwiYXBwL2NvbXBvbmVudHMvUGFpckNvdW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEFwcCA9IHJlcXVpcmUoJy4vQXBwLmpzJyk7XG5cblJlYWN0LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwgbnVsbCksIGRvY3VtZW50LmJvZHkpO1xuIiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIE5hbWUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTmFtZScpO1xudmFyIFBhaXJDb3VudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9QYWlyQ291bnQnKTtcblxudmFyIG5hbWVzID0gW1xuICAgICdBbmdlbCcsICdCcmFuZG9uJywgJ0RhdmlkJywgJ0V2YW4nLCAnSm9obicsICdKdWFuJywgJ0p1bGllJywgJ0tldmluJyxcbiAgICAnTm9haCcsICdSeWFuJywgJ1NhbmcnLCAnU3RlZmFuaWEnLCAnVHJhY3knLCAnV2lsbCdcbl1cblxudmFyIHBhaXJpbmdzID0ge1xuICAgIEFuZ2VsOiB7XG4gICAgICAgIE5vYWg6IDFcbiAgICB9LFxuICAgIEJyYW5kb246IHtcbiAgICAgICAgRGF2aWQ6IDFcbiAgICB9LFxuICAgIERhdmlkOiB7XG4gICAgICAgIEp1YW46IDEsXG4gICAgICAgIE5vYWg6IDFcbiAgICB9LFxuICAgIEV2YW46IHtcbiAgICAgICAgSnVsaWU6IDEsXG4gICAgICAgIFNhbmc6IDEsXG4gICAgICAgIFdpbGw6IDFcbiAgICB9LFxuICAgIEpvaG46IHtcbiAgICAgICAgU2FuZzogMixcbiAgICAgICAgV2lsbDogMVxuICAgIH0sXG4gICAgSnVhbjoge1xuICAgICAgICBTdGVmYW5pYTogMlxuICAgIH0sXG4gICAgSnVsaWU6IHtcbiAgICAgICAgS2V2aW46IDJcbiAgICB9LFxuICAgIEtldmluOiB7XG4gICAgICAgIFRyYWN5OiAxXG4gICAgfSxcbiAgICBOb2FoOiB7fSxcbiAgICBSeWFuOiB7fSxcbiAgICBTYW5nOiB7fSxcbiAgICBTdGVmYW5pYToge30sXG4gICAgVHJhY3k6IHt9XG59XG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQXBwXCIsXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxlbiA9IG5hbWVzLmxlbmd0aDtcbiAgICAgICAgdmFyIHhzID0gW11cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICB4cy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmFtZSwge2tleTogbmFtZXNbaV0gKyAnMCcsIG5hbWU6IG5hbWVzW2ldfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4cy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJpbnZpc2libGVcIn0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgeHMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFBhaXJDb3VudCwge2tleTogbmFtZXNbal0gKyBuYW1lc1tpXSwgeDogbmFtZXNbal0sIHk6IG5hbWVzW2ldfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeHMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KE5hbWUsIHtrZXk6IG5hbWVzW2ldICsgJzEnLCBuYW1lOiBuYW1lc1tpXX0pKTtcbiAgICAgICAgICAgIHhzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHhzKVxuICAgICAgICApO1xuICAgIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuIiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgTmFtZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJOYW1lXCIsXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJuYW1lXCJ9LCB0aGlzLnByb3BzLm5hbWUpXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTmFtZTtcbiIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIHBhaXJpbmdzID0ge1xuICAgIEFuZ2VsOiB7XG4gICAgICAgIEJyYW5kb246IDAsXG4gICAgICAgIERhdmlkOiAxLFxuICAgICAgICBFdmFuOiAyLFxuICAgICAgICBKb2huOiAzLFxuICAgICAgICBKdWFuOiA0LFxuICAgICAgICBKdWxpZTogNSxcbiAgICAgICAgTm9haDogMVxuICAgIH0sXG4gICAgQnJhbmRvbjoge1xuICAgICAgICBEYXZpZDogMVxuICAgIH0sXG4gICAgRGF2aWQ6IHtcbiAgICAgICAgSnVhbjogMSxcbiAgICAgICAgTm9haDogMVxuICAgIH0sXG4gICAgRXZhbjoge1xuICAgICAgICBKdWxpZTogMSxcbiAgICAgICAgU2FuZzogMSxcbiAgICAgICAgV2lsbDogMVxuICAgIH0sXG4gICAgSm9objoge1xuICAgICAgICBTYW5nOiAyLFxuICAgICAgICBXaWxsOiAxXG4gICAgfSxcbiAgICBKdWFuOiB7XG4gICAgICAgIFN0ZWZhbmlhOiAyXG4gICAgfSxcbiAgICBKdWxpZToge1xuICAgICAgICBLZXZpbjogMlxuICAgIH0sXG4gICAgS2V2aW46IHtcbiAgICAgICAgVHJhY3k6IDFcbiAgICB9LFxuICAgIE5vYWg6IHt9LFxuICAgIFJ5YW46IHt9LFxuICAgIFNhbmc6IHt9LFxuICAgIFN0ZWZhbmlhOiB7fSxcbiAgICBUcmFjeToge31cbn1cblxudmFyIFBhaXJDb3VudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJQYWlyQ291bnRcIixcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY291bnQgPSBwYWlyaW5nc1t0aGlzLnByb3BzLnhdW3RoaXMucHJvcHMueV0gfHwgMDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiAncGFpci1jb3VudCBwYWlyZWQtJyArIGNvdW50fSwgY291bnQpXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFpckNvdW50O1xuIl19
