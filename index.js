// ENV
require('dotenv').config()
console.log(process.env.TOKEN ? 'The TOKEN has been set correctly' : 'oops no TOKEN set');

// CORE
const messageControl = require('./core/policies')
const { bot, config } = require('./core/bot')
const processMessage = require('./core/processMessage')
const setPresence = require('./core/actions/setPresence')

// Set avatar when ready
bot.on('ready', async () => {
  console.log(`${bot.user.username} ready !`);
  setPresence(bot, config.presence.game)
  // generateInvite(bot, ['ADMINISTRATOR'])
})

// When receive a message
bot.on('message', async (message) => {
  try {
    const { options, controlledMessage } = await messageControl(message);
    console.log('options', options)
    console.log('controlledMessage', controlledMessage)
    if (options.controls) {
      console.log('Message controlled okay', controlledMessage)
      return processMessage(controlledMessage, options)
    }
  } catch (e){
    console.log('Youps', e.stack || e)
  }
})

// Say hi to new comers
bot.on('guildMemberAdd', (newMember) => {
  console.log('New Member', newMember)
  return newMember.createDM()
        .then((channel) => channel.send(`Bienvenue sur le serveur ${newMember.displayName}!`))
        .catch(console.error)
})