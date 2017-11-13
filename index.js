// ENV
require('dotenv').config()
console.log(process.env.TOKEN ? 'The TOKEN has been set correctly' : 'oops no TOKEN set');

// CORE
const messageControl = require('./core/policies')
const { bot, config } = require('./core/bot')
const processMessage = require('./core/processMessage')

// CMDS
const {
  setPresence,
  replyPong,
  generateInvite } = require('./cmds/actions')

// const Google = require('./cmds/old/google.js')
// const Ping = require('./cmds/old/ping.js')
const utils = require('./core/utils')


// Set avatar when ready
bot.on('ready', async () => {
  console.log(`${bot.user.username} ready !`);
  setPresence(bot, config.presence)
  generateInvite(bot, ['ADMINISTRATOR'])

  // bot.user.setAvatar('./img/harrybotteur.jpg')
  //     .then((payload) => console.log('Avatar mis avec succès', payload))
  //     .catch(console.error)
})


// When receive a message
bot.on('message', async (message) => {
  const messageControlled = await messageControl(message);
  if(messageControlled){
    console.log('Message okay', messageControlled.content)
    return processMessage(message)
  }
})

// Say hi to new comers
bot.on('guildMemberAdd', (newMember) => {
  console.log('New Member', newMember)
  return newMember.createDM()
        .then((channel) => channel.send(`Bienvenue sur le serveur ${newMember.displayName}!`))
        .catch(console.error)
})
