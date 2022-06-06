#!/usr/bin/env node

const {
  Command
} = require('commander');

const pkg = require('./package.json')
const program = new Command();
program.version(pkg.version);


program
  .command('look ')
  .option('-u, url <url>', '[users/repos]', '')
  .description("[users/repos] Example: hpstream/github-plugin")
  .action(require('./src/commander/config'))


program.parse(process.argv);

process.on('unhandledRejection', error => {
  // Will print "unhandledRejection err is not defined"
  console.log(error);
});