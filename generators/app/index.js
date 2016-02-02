'use strict';
var yeoman = require('yeoman-generator').Base;
var yosay = require('yosay');

var ComponentGenerator = yeoman.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the Epiceros frontend component generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'ComponentName',
        message: 'What is the name of the component?',
      }
    ];

    this.prompt(prompts, function (props) {
      this.composeWith("component:component", {options: {'ComponentName': props.ComponentName}});
      done();
    }.bind(this));
  }
});

module.exports = ComponentGenerator;