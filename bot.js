const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543958611424968723")
setInterval(function() {
channel.send(` احا الشبشب ضاع`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
