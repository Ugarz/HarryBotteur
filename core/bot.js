const Discord = require('discord.js')

const bot = new Discord.Client({
  disableEveryone: true
})
const embed = new Discord.RichEmbed()

const createEmbed = (dataToEmbed) => {
  return new Discord.RichEmbed(dataToEmbed)
}

const config = require('../config.json')

// Login bot
bot.login(config.token)
  .then(() => console.log(`${bot.user.username} logged in`))

module.exports = {
  bot,
  embed,
  config,
  createEmbed
}