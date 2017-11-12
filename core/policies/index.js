const checkAuthorMessage = require('./checkAuthorMessage')
const checkIfDirectMessage = require('./checkIfDirectMessage')

/**
 * Message Control
 * This function is a process to analyse any message who come in a public
 * channel to respect policies and code of conduct for bots.
 * @param  {object} message the message sent by a user
 * @return {promise}         The message analysed, untouched.
 */
function messageControl(message){
  console.log('\n\t Controlling message :', message.content);
  return checkAuthorMessage(message)
    .then(messageFromAUser => checkIfDirectMessage(messageFromAUser))
    .catch(err => console.error(err))
}

module.exports = messageControl;
