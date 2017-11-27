"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var PieTooltip = require('../../src').PieTooltip;
var SimpleTooltipStyle = require('../../src/tooltip/simple');

var generalChartData = require('dsv?delimiter=,!./data/age_pie.csv')

var value = function(d) {
    return +d.population;
  },
  name = function(d) {
    return d.age;
  },
  chartSeries = [
    {
      "field": "<5",
      "name": "less than 5"
    },
    {
      "field": "5-13",
      "name": "5 to 13"
    },
    {
      "field": "14-17",
      "name": "14 to 17"
    },
    {
      "field": "18-24",
      "name": "18 to 24"
    },
    {
      "field": "25-44",
      "name": "25 to 44"
    },
    {
      "field": "45-64",
      "name": "45 to 64"
    }
  ];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      width: 600,
      height: 400,
      series: chartSeries
    }
  },
  onClick: function() {
    this.setState({
      width: this.state.width === 600? 400: 600,
      height: this.state.width === 600? 600: 400,
      series: this.state.width === 600? [
        {
          "field": "5-13",
          "name": "5 to 13"
        },
        {
          "field": "14-17",
          "name": "14 to 17"
        }
      ]: chartSeries
    })
  },
  render: function() {

    return (
      <div>
        <button onClick={this.onClick}>toggle</button>
        <PieTooltip
          width= {this.state.width}
          height= {this.state.height}
          data= {generalChartData}
          value = {value}
          name = {name}
          chartSeries = {this.state.series}
        >
          <SimpleTooltipStyle/>
        </PieTooltip>
      </div>
    )
  }
})
