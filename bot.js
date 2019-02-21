const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("548219494972129290")
setInterval(function() {
channel.send(`هل تعلم ان مخ نملة اكبر من مخ انسان ؟؟`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
