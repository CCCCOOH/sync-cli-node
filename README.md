# sync-tool-kit

一个简单的 Node.js 命令行工具集。

## 安装

```bash
npm install
```

## 可用命令

### `deepseek` — 查询 DeepSeek 余额

查询 DeepSeek API 的剩余额度：

```bash
sync deepseek
```

余额大于 5 时以黄色显示，小于等于 5 时以红色告警。

### `conf <token>` — 配置 API Token

保存你的 DeepSeek API Token：

```bash
sync conf <your-api-token>
```

Token 会持久化存储在本地，无需每次输入。

### `look` — 查看当前 Token

查看已配置的 Token（仅显示前 10 位，其余隐藏）：

```bash
sync look
```

## 技术栈

- [Commander.js](https://github.com/tj/commander.js) — 命令行解析
- [Chalk](https://github.com/chalk/chalk) — 终端彩色输出
- [Axios](https://github.com/axios/axios) — HTTP 请求
- [conf](https://github.com/sindresorhus/conf) — 本地配置持久化
- [shelljs](https://github.com/shelljs/shelljs) — Shell 命令执行

## 许可

ISC
