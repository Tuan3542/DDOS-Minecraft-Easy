const mineflayer = require('mineflayer');
const parse = require('set-cookie-parser');

if (process.argv.length < 5){console.log(`Develop BY TUAN3542`);console.log(`Usage: ip port count namebot version`); process.exit();}
const SERVER_IP = process.argv[2];
const SERVER_PORT = process.argv[3];
const BOT_COUNT = parse.int(process.argv[4]);
const BOT_NAME_PREFIX = process.argv[5];
function createBot(i) {
  const bot = mineflayer.createBot({
    host: SERVER_IP,
    port: SERVER_PORT,
    username: `${BOT_NAME_PREFIX}${i}`,
    version: process.argv[6]
  });

  bot.on('spawn', () => {
    console.log(`[+] ${bot.username} đã vào server.`);
  });

  bot.on('end', () => {
    console.log(`[-] ${bot.username} đã rời server.`);
  });

  bot.on('error', (err) => {
    console.log(`[!] Lỗi bot ${bot.username || 'chưa spawn'}:`, err.message);
  });
}
for (let i = 0; i < BOT_COUNT; i++) {
  setTimeout(() => createBot(i), i * 4000); // delay
}

