/* 
 * Notes Server
 */

var express = require("express");
var app = express();

app.use(express.static("./src"));

app.listen(8080)

/*
 * vim: ts=4 et nowrap autoindent
 */
