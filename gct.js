#!/usr/bin/env node
const exec = require('child_process');
const commander = require('commander');
const { stderr } = require('process');
const program = new commander.Command();
const config = require('./config');

program
  .option('-m, --message <commitMessage>', 'add commit message for the commit trailer');

program.parse(process.argv);

const options = program.opts();

const fullCommitMessage = `${options.message}\n\n${config.coAuthor1}`
console.log(fullCommitMessage);
exec(`git commit -m "${fullCommitMessage}"`, (error, stdout, stderr) => {
  if(error) {
    console.log(`Oh dear, this isn't supposed to happen. Error message: ${error.message}`);
    return;
  }
  if(stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(stdout);
});