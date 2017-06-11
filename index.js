const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require('./config.json')

// Définit l'avatar
bot.on('ready', () => {
    bot.user.setAvatar('./img/harrybotteur.jpg')
})

bot.login(config.token)
// bot.on('message', (message) => {
//     if (message.content === 'ping'){
//         message.reply('pong')
//     }
// })
bot.on('message', (message) => {
    if (message.content === 'ping'){
        message.channel.send('pong')
    }
})