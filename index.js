const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Insert link to connect MongoDB to server
const dbURL = '';

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
app.use(express.static(path.join(__dirname, 'build')));
app.use("/assets", express.static(__dirname + '/assets'));
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on: ' + port);