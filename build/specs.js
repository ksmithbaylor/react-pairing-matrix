(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./specs/App-spec.js":[function(require,module,exports){
var App = require('./../app/App.js');
var TestUtils = require('react-addons').TestUtils;

describe("App", function() {

  it("should render text: Hello world!", function() {
    var app = TestUtils.renderIntoDocument(App());
    expect(app.getDOMNode().textContent).toEqual('Hello world!');
  });

});
},{"./../app/App.js":"/Users/ksmith/main/projects/current/pairing-matrix/app/App.js","react-addons":"react-addons"}],"/Users/ksmith/main/projects/current/pairing-matrix/app/App.js":[function(require,module,exports){
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

},{"react":"react"}]},{},["./specs/App-spec.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcGVjcy9BcHAtc3BlYy5qcyIsImFwcC9BcHAuanMiLCJhcHAvY29tcG9uZW50cy9OYW1lLmpzIiwiYXBwL2NvbXBvbmVudHMvUGFpckNvdW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBBcHAgPSByZXF1aXJlKCcuLy4uL2FwcC9BcHAuanMnKTtcbnZhciBUZXN0VXRpbHMgPSByZXF1aXJlKCdyZWFjdC1hZGRvbnMnKS5UZXN0VXRpbHM7XG5cbmRlc2NyaWJlKFwiQXBwXCIsIGZ1bmN0aW9uKCkge1xuXG4gIGl0KFwic2hvdWxkIHJlbmRlciB0ZXh0OiBIZWxsbyB3b3JsZCFcIiwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFwcCA9IFRlc3RVdGlscy5yZW5kZXJJbnRvRG9jdW1lbnQoQXBwKCkpO1xuICAgIGV4cGVjdChhcHAuZ2V0RE9NTm9kZSgpLnRleHRDb250ZW50KS50b0VxdWFsKCdIZWxsbyB3b3JsZCEnKTtcbiAgfSk7XG5cbn0pOyIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBOYW1lID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL05hbWUnKTtcbnZhciBQYWlyQ291bnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvUGFpckNvdW50Jyk7XG5cbnZhciBuYW1lcyA9IFtcbiAgICAnQW5nZWwnLCAnQnJhbmRvbicsICdEYXZpZCcsICdFdmFuJywgJ0pvaG4nLCAnSnVhbicsICdKdWxpZScsICdLZXZpbicsXG4gICAgJ05vYWgnLCAnUnlhbicsICdTYW5nJywgJ1N0ZWZhbmlhJywgJ1RyYWN5JywgJ1dpbGwnXG5dXG5cbnZhciBwYWlyaW5ncyA9IHtcbiAgICBBbmdlbDoge1xuICAgICAgICBOb2FoOiAxXG4gICAgfSxcbiAgICBCcmFuZG9uOiB7XG4gICAgICAgIERhdmlkOiAxXG4gICAgfSxcbiAgICBEYXZpZDoge1xuICAgICAgICBKdWFuOiAxLFxuICAgICAgICBOb2FoOiAxXG4gICAgfSxcbiAgICBFdmFuOiB7XG4gICAgICAgIEp1bGllOiAxLFxuICAgICAgICBTYW5nOiAxLFxuICAgICAgICBXaWxsOiAxXG4gICAgfSxcbiAgICBKb2huOiB7XG4gICAgICAgIFNhbmc6IDIsXG4gICAgICAgIFdpbGw6IDFcbiAgICB9LFxuICAgIEp1YW46IHtcbiAgICAgICAgU3RlZmFuaWE6IDJcbiAgICB9LFxuICAgIEp1bGllOiB7XG4gICAgICAgIEtldmluOiAyXG4gICAgfSxcbiAgICBLZXZpbjoge1xuICAgICAgICBUcmFjeTogMVxuICAgIH0sXG4gICAgTm9haDoge30sXG4gICAgUnlhbjoge30sXG4gICAgU2FuZzoge30sXG4gICAgU3RlZmFuaWE6IHt9LFxuICAgIFRyYWN5OiB7fVxufVxuXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkFwcFwiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsZW4gPSBuYW1lcy5sZW5ndGg7XG4gICAgICAgIHZhciB4cyA9IFtdXG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgeHMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KE5hbWUsIHtrZXk6IG5hbWVzW2ldICsgJzAnLCBuYW1lOiBuYW1lc1tpXX0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeHMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiaW52aXNpYmxlXCJ9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgIHhzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChQYWlyQ291bnQsIHtrZXk6IG5hbWVzW2pdICsgbmFtZXNbaV0sIHg6IG5hbWVzW2pdLCB5OiBuYW1lc1tpXX0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHhzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChOYW1lLCB7a2V5OiBuYW1lc1tpXSArICcxJywgbmFtZTogbmFtZXNbaV19KSk7XG4gICAgICAgICAgICB4cy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCB4cylcbiAgICAgICAgKTtcbiAgICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIE5hbWUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiTmFtZVwiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibmFtZVwifSwgdGhpcy5wcm9wcy5uYW1lKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5hbWU7XG4iLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBwYWlyaW5ncyA9IHtcbiAgICBBbmdlbDoge1xuICAgICAgICBOb2FoOiAxXG4gICAgfSxcbiAgICBCcmFuZG9uOiB7XG4gICAgICAgIERhdmlkOiAxXG4gICAgfSxcbiAgICBEYXZpZDoge1xuICAgICAgICBKdWFuOiAxLFxuICAgICAgICBOb2FoOiAxXG4gICAgfSxcbiAgICBFdmFuOiB7XG4gICAgICAgIEp1bGllOiAxLFxuICAgICAgICBTYW5nOiAxLFxuICAgICAgICBXaWxsOiAxXG4gICAgfSxcbiAgICBKb2huOiB7XG4gICAgICAgIFNhbmc6IDIsXG4gICAgICAgIFdpbGw6IDFcbiAgICB9LFxuICAgIEp1YW46IHtcbiAgICAgICAgU3RlZmFuaWE6IDJcbiAgICB9LFxuICAgIEp1bGllOiB7XG4gICAgICAgIEtldmluOiAyXG4gICAgfSxcbiAgICBLZXZpbjoge1xuICAgICAgICBUcmFjeTogMVxuICAgIH0sXG4gICAgTm9haDoge30sXG4gICAgUnlhbjoge30sXG4gICAgU2FuZzoge30sXG4gICAgU3RlZmFuaWE6IHt9LFxuICAgIFRyYWN5OiB7fVxufVxuXG52YXIgUGFpckNvdW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlBhaXJDb3VudFwiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjb3VudCA9IHBhaXJpbmdzW3RoaXMucHJvcHMueF1bdGhpcy5wcm9wcy55XSB8fCAwO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6ICdwYWlyLWNvdW50IHBhaXJlZC0nICsgY291bnR9LCBjb3VudClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYWlyQ291bnQ7XG4iXX0=
