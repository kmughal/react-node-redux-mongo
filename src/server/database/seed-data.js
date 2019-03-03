const md5 = require("md5");

module.exports.defaultState = [{
  id: 1,
  name: 'John',
  password: md5("JOHN"),
  tasks: []
},
{
  id: 2,
  name: 'Peter',
  password: md5("PETER"),
  tasks: []
},
{
  id: 3,
  name: 'Kevin',
  password: md5("KEVIN"),
  tasks: []
}
];