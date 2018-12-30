const { config } = require('./bot')
const actions = require('./actions/index')

/**
 * Process the order
 * @param {object} controlledMessage 
 * @param {options} options 
 */
function processMessage(controlledMessage, options) {
  // console.log('controlledMessage', controlledMessage)
  // const fullAuthorName = `${controlledMessage.author.username}#${controlledMessage.author.discriminator}`;

  if (options.prefix !== config.prefix) {
    console.log(options.prefix)
    console.log(config.prefix)
    console.log('What\'s the magic word, you dummie ?')
    return;
  };

  try {
    console.log(`Prefix found, launching script "${options.command}"`)
    console.log('MENACE', actions[options.command])
    return actions[options.command](message);
  } catch(e) {
    return controlledMessage.reply('No script found for this command, are you sure of the command name ?')
  }
}

module.exports = processMessage;
