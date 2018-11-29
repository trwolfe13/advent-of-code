const d3 = require('d3');

var svg = d3.select('svg'),
  margin = { top: 20, right: 80, bottom: 30, left: 50 },
  width = svg.attr('width') - margin.left - margin.right,
  height = svg.attr('height') - margin.top - margin.bottom,
  g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

const rawData = require('./data.json');

const registers = Object.keys(rawData).map(r => ({
  name: r,
  data: rawData[r],
}));

const x = d3.scaleLinear().range([0, width]).domain([0, registers[0].data.length - 1]);
const y = d3.scaleLinear().range([height, 0])
  .domain([
    d3.min(registers.map(d => d3.min(d.data))) - 20,
    d3.max(registers.map(d => d3.max(d.data))) + 20
  ]);
const z = d3.scaleOrdinal(d3.schemeCategory20).domain(registers.map(d => d.name));

const line = d3.line()
  .curve(d3.curveBasis)
  .x((d, i) => x(i))
  .y(d => y(d));

g.append('g')
  .attr('class', 'axis axis--x')
  .attr('transform', 'translate(0,' + height + ')')
  .call(d3.axisBottom(x));

g.append('g')
  .attr('class', 'axis axis--y')
  .call(d3.axisLeft(y));

const register = g.selectAll('.register')
  .data(registers)
  .enter().append('g')
  .attr('class', 'register');

register.append('path')
  .attr('class', 'line')
  .attr('d', d => line(d.data))
  .style('stroke', d => z(d.name));

register.append('text')
  .datum(d => ({ name: d.name, value: d.data[d.data.length - 1] }))
  .attr('transform', (d, i) => 'translate(' + x(registers[0].data.length) + ',' + y(d.value) + ')')
  .attr('x', 3)
  .attr('dy', '0.35em')
  .style('font', '10px sans-serif')
  .text(d => d.name);
