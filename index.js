const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./cmds/google.js')
const Ping = require('./cmds/ping.js')
const config = require('./config.json')

// Bnet client
const Battlenet = require('battlenet.js')
const bnetClient = new Battlenet(config.bnet.key, {
    region: 'eu',
    locale: 'fr_FR'
});
const wClient = bnetClient.warcraft;

var fields = ['feed', 'guild'];
wClient.getCharacter('Hyjal', 'Carbø', fields, function(err, response) {
    if (err) {
        throw err;
    }
    console.log(response)
});

// wClient.getCharacter('Hyjal', 'Carbø', ['feed', 'guild'], (datas) => {
//     console.log('\nDATAS', datas)
// })



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

