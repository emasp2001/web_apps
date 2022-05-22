// This file is programming with JavaScript old school to learn, after this we will switch to modern JavaScript.

// How to import files from external libraries.
// CommonJS form: const owl_game = require('./app/owl_game-commonjs')
import http from 'http';
import * as owl_game from './app/owl_game.js'

const server = http.createServer(owl_game.handleHttpRequest);

// This listen does not lock waiting for connection.
server.listen(3000);
