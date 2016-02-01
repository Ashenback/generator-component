'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator').Base;
var yosay = require('yosay');

var ComponentGenerator = yeoman.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the Kostym Component generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'ComponentName',
        message: 'What is the name of the component?',
      }
    ];

    this.prompt(prompts, function (props) {
      this.composeWith("component", {options: {'ComponentName': props.ComponentName}});
      done();
    }.bind(this));
  },



});

module.exports = ComponentGenerator;