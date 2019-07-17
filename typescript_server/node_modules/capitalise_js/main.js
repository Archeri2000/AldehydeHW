caps = require("./capitalise.js")

var args = process.argv.slice(2);
caps.PipeFile(args[0], args[1], caps.CapsFirst);