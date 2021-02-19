const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const EventEmitter = require("events");
const { emit } = require("process");

var emitter = new EventEmitter;

emitter.on('addMessageLog', ()=>{
    console.log('Listener called');
});

emitter.emit('addMessageLog');

var app = express();

app.get('/:id', (req, res) => {
    let sonuc = parseInt(req.params.id);
    sonuc += 1;
    res.send(`Sonuç: ${sonuc}`);
});

app.listen(process.env.PORT || 4000, ()=>{
    console.log('Server is started on 127.0.0.1:' + (process.env.PORT || 4000))
});