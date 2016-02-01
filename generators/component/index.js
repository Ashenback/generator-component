'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator').Base;

var component = yeoman.extend({
  prompting: function () {
    var done = this.async();

      var prompts = [{
        when: function (response) {
          return (this.options && this.options.ComponentName) ? false : true;
        }.bind(this),
        type: 'input',
        name: 'ComponentName',
        message: 'What is the name of the component?',
      }];

    this.prompt(prompts, function (props) {
      if (props.ComponentName){
        this.ComponentName = props.ComponentName;
        this.componentPath = './';
      } else {  
        this.ComponentName = this.options.ComponentName;
        this.componentPath = this.options.ComponentName + '/';
      }
      done();
    }.bind(this));
  },

  writing: function () {
    this.template('component.css', this.componentPath + this.ComponentName + '.css', this);
    this.template('component.js', this.componentPath + this.ComponentName + '.js', this);
    this.template('index.js', this.componentPath + 'index.js', this);
  },

});

module.exports = component;