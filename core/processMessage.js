const { config, embed } = require('./bot')
const { actions } = require('../cmds/actions')
const utils = require('./utils')

function processMessage(message){
  const fullAuthorName = `${message.author.username}#${message.author.discriminator}`;
  console.log('\n\t Processing message');
  let messageArray = message.content.split(' ')
  console.log('Message Array', messageArray);
  const command = messageArray[0];
  console.log('The command is :', command);
  messageArray = messageArray.slice(1)

  if(!command.startsWith(config.prefix)){
    console.log('What is the magic word , dummie ?')
    return;
  };
  if(command === `${config.prefix}userinfo`){
    // #98BAD7 light blue
    embed
      .setAuthor(message.author.username)
      .setDescription('A super user')
      .setColor("#9B59B6")
      .addField('Full Username', fullAuthorName)
      .addField('Id User', `${message.author.id}`)
      .addField('Created at', `${message.author.createdAt}`)
      return message.channel.sendEmbed(embed);
  };
  if(command === `${config.prefix}ping`){
    return message.reply('pong ! :ping_pong: :laughing:')
  };
  if(command === `${config.prefix}help`){
    return utils.helpEmbed(message)
  };

}

module.exports = processMessage;
