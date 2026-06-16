#!/usr/bin/env node
import {Command} from 'commander'     // 用于创建命令行脚本
import Conf from 'conf'         // 持久化用户配置
import shell from 'shelljs'         // 执行shell批处理命令
import chalk from 'chalk'           // 引入 chalk
import axios from 'axios'
const program = new Command();            // 创建一个命令程序对象
const config = new Conf({
  projectName: 'sync-tool'
})

let deepseek_config = {
  method: 'get',
maxBodyLength: Infinity,
  url: 'https://api.deepseek.com/user/balance',
  headers: { 
    'Accept': 'application/json', 
    'Authorization': `Bearer ${config.get('token')}`
  }
};

program
  .version('1.0.0')
  .name('sync-tool-kit')
  .description('CLI of sync')

program.command('deepseek')
  .description('查询deepseek剩余额度')
  .action(_ => {
    axios(deepseek_config)
    .then((response) => {
      const res = response.data
//        console.log(res)
      const balance = res.balance_infos[0].total_balance
      if (balance > 5) {
        console.log(chalk.blue('当前deepseek余额:') + chalk.bold.underline.yellow(balance))
      } else {
        console.log(chalk.blue('当前deepseek余额:') + chalk.bold.red(balance))
      }
    })
    .catch((error) => {
      console.log(error);
    });
  })

program.command('conf')
  .argument('<token>', '配置token')
  .description('配置token')
  .action(token => {
    config.set('token', token)        // 配置token
    console.log(chalk.green('配置成功~'))
  })

program.command('look')
  .description('查看token')
  .action(token => {
    console.log(chalk.red(config.get('token').slice(0, 10) + '...')) 
  })


program.parse(process.argv)

