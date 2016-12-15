'use strict';

// <%= name %>-model.js - A thinky model
// 
// See http://thinky.io/documentation/
// for more of what you can do here.

const thinky = require('thinky')(); 
const type = thinky.type;  
const r = thinky.r;

const <%= name %>Model = thinky.createModel('<%= name %>', {
  <% if(name === 'user') { %><% for (var i = 0; i < providers.length; i++) { %>
  <% if (providers[i] === 'local') { %>email: {_type: type.string(), enforce_missing: true},
  password: {_type: type.string(), enforce_missing: true},
  <% } else { %><%= providers[i].name %>Id: {_type: type.string()},
  <%= providers[i].name %>: {_type: type.string(), enforce_type: "none"},<% }%><% } %><% } else { %>
  text: {_type: type.string(), enforce_missing: true},<% } %>
  createdAt: type.date().default(Date.now),
  updatedAt: type.date().default(Date.now)
});

module.exports = <%= name %>Model;