const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')

const {Telegraf}  = require('telegraf')


const API_TOKEN = process.env.API_TOKEN || '1679701406:AAFMjJeafL8IpGNQWGWDjZvDzEd_AOKBndg';
const PORT = process.env.PORT || 8000;
const URL = process.env.URL || "https://hellexample1.herokuapp.com";
const bot = new Telegraf(API_TOKEN);

//bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);
//bot.startWebhook(`/bot${API_TOKEN}`, null, PORT);

const chatId=647015353;

bot.start(ctx=>{
  ctx.reply("hello")
  
const api_id = '2730979';
const api_hash = 'bcaa6084a7c92b503bafdeeaebcc5081';
const client = new Client(new TDLib('./libtdjson.so'), {
  apiId: api_id, // Your api_id, get it at http://my.telegram.org/
  apiHash: api_hash // Your api_hash
})

client.on('error', console.error)
client.on('update', update => {
  console.log('Received update:', update)
  ctx.reply(update)
})

async function main () {
  await client.connectAndLogin()
  console.log(await client.invoke({ _: 'getMe' }))
}

main()
})
bot.launch()