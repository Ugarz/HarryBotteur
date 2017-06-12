const Discord = require('discord.js')
const bot = new Discord.Client()

// Login bot
bot.login('MjgzMTY3NTIzNzgyNzg3MDcy.DB8Xig.BasDJKFfWAmIS8WLuinCgaHs5tw')

// Set avatar when ready
bot.on('ready', () => {
    bot.user.setAvatar('./img/harrybotteur.jpg')
        .then(() => console.log('Avatar mis avec succès'))
        .catch(console.error)
})

// When receive a message
bot.on('message', (message) => {
    if (message.content === 'ping'){
        message.reply('pong')
    } else if(message.content === 'infos'){
        message.reply('Sur quoi ?')
    }
})