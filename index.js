#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();

program
  .version('1.0.0')
  .name('sync的命令行工具箱')
  .description('CLI of sync')

program.command('new <name>')
  .description('create a project in you codes dir')
  .action(name => {
    console.log(`create: ${name} successfully!`)
  })

program.parse(process.argv)

