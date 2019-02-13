var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('log-arquivo', (evt) => { console.log(evt) });

fs.readFile('input.txt', (err, data) => {
    if (err) return console.error(err);
    eventEmitter.emit('log-arquivo', data.toString());
});


console.log("Program Ended");