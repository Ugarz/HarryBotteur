const path = require('path')
const { embed } = require('./bot')

function setPresence(bot, content){
  console.log('set Presence okay');
  return bot.user.setPresence(content)
}

function richEmbed(message){
  console.log('Emission d\'une aide sur le')
  const helpEmbed = embed
    .setColor('#bada55')
    .setDescription('Ceci est une liste de commande pour vous aider à savoir quoi et comment faire avec ce bot.')
    .addField('Besoin d\'une liste de commande ?')
    .addField('!help', 'La commande d\'aide', true)
    .addField('!ping', 'Jouer au pingpong', true)
    .setFooter('Envie de faire un don ? ne vous retenez plus !')
    return message.channel.send(helpEmbed)
}

module.exports = {
  setPresence,
  richEmbed
};
