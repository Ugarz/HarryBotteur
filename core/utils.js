const { embed } = require('./bot')

function setPresence(bot, action, content){
  console.log('set Presence okay');
  return bot.user.setPresence(content)
}

function richEmbed(message){
  console.log(message)
  console.log('Emission d\'une aide sur le')
  const helpEmbed = embed
    .setColor('#bada55')
    .addField('Besoin d\'aide sur la crypto ?')
    .setFooter('N\'oubliez pas de respecter vos ami(e)s !')
    return message.channel.send(helpEmbed)
}

module.exports = {
  setPresence,
  richEmbed
};
