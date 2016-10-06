#!/usr/bin/env node
const lib= require('../lib/index.js');
const program = require('commander');

program
  .version('0.0.1');

program
  .command('log [entryText...]')
  .action(function(entryText) {
    var entry = "\n" + new Date();
    if (entryText) {
       entryText.forEach(function (entryChunk) {
         entry = entry + " " +  entryChunk;
       });
     }
    lib.logTime(entry);
  });

program
  .parse(process.argv);
