'use strict';
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var ComponentGenerator = yeoman.Base.extend({

  constructor: function () {
    yeoman.Base.apply(this, arguments);
    this.argument('ComponentName', { type: String, required: false });
  },

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the Epiceros frontend component generator!'
    ));

    if (this.ComponentName) {
      this.composeWith("component:component", {options: {'ComponentName': this.ComponentName}});
      done();
      process.exit(0);

    } else {
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
  
  }
});

module.exports = ComponentGenerator;