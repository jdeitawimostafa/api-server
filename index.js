'use strict';

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const server = require('./src/server.js');

mongoose
  .connect(process.env.MONGOOSE_URI,
    { useNewUrlParser:true,useUnifiedTopology:true})
  .then(() => {
    server.start(process.env.PORT);
  })
  .catch((e) => {
    console.log('CONNECTION_ERROR',e.message);
  });

