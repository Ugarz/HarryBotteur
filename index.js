const { bot } = require('./core/bot')

const Google = require('./cmds/google.js')
const Ping = require('./cmds/ping.js')
const utils = require('./core/utils')


// Set avatar when ready
bot.on('ready', () => {
  console.log('I am ready!');
  // bot.user.setGame('Overwatch').catch(console.error)
  utils.setPresence(bot, 'ready', {game: {name: 'être trader !', type: 0 }})
  // bot.user.setAvatar('./img/harrybotteur.jpg')
  //     .then((payload) => console.log('Avatar mis avec succès', payload))
  //     .catch(console.error)
})


// When receive a message
bot.on('message', (message) => {
    if(message.content == '!help'){
      console.log('Demande d\'aide');
      return utils.richEmbed(message)
    }
    let commandUsed = Google.parse(message) || Ping.parse(message)
    Google.parse(message)
})

// Say hi to new comers
bot.on('guildMemberAdd', (newMember) => {
    newMember.createDM()
        .then((channel) => channel.send(`Bienvenue sur le serveur ${newMember.displayName}!`))
        .catch(console.error)
})
