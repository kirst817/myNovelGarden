var express = require('express');
express().use(express.static(__dirname)).listen(process.env.PORT || 3000);

// var cors = require('cors');
// app.use(cors());
