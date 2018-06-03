const path = require('path')
const { embed, createEmbed } = require('./bot')

function setPresence(bot, content){
  console.log('Seting Presence..');
  return bot.user.setPresence(content)
}

function helpEmbed(message){
  console.log('Embedding..')
  embed
    .setColor('#bada55')
    .setDescription('Ceci est une liste de commande pour vous aider à savoir quoi et comment faire avec ce bot.')
    .addField('Besoin d\'une liste de commande ?')
    .addField('!help', 'La commande d\'aide.', true)
    .addField('!ping', 'Jouer au pingpong.', true)
    .addField('!userinfo', 'Obtenir toutes les informations utilisateur sur toi.', true)
    .setFooter('Envie de faire un don ? ne vous retenez plus !')
    return message.channel.send(embed)
}

module.exports = {
  setPresence,
  helpEmbed
};
