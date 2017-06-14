const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./cmds/google.js')
const Ping = require('./cmds/ping.js')
const config = require('./config.json')
// Login bot
bot.login(config.token)


// Set avatar when ready
bot.on('ready', () => {
    bot.user.setAvatar('./img/harrybotteur.jpg')
        .then(() => console.log('Avatar mis avec succès'))
        .catch(console.error)
    // bot.user.setGame('World Of Warcraft').catch(console.error)
})


// When receive a message
bot.on('message', (message) => {
    let commandUsed = Google.parse(message) || Ping.parse(message)
    Google.parse(message)
})


// Say hi to new comers
bot.on('guildMemberAdd', (newMember) => {
    newMember.createDM()
        .then((channel) => channel.send(`Bienvenu sur le chan ${newMember.displayName}!`))
        .catch(console.error)
})

