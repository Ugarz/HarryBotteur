const checkAuthorMessage = require('./checkAuthorMessage')
const checkIfDirectMessage = require('./checkIfDirectMessage')
const dataFormatter = require('./dataFormatter')

/**
 * Message Control
 * This function is a process to analyse any message who come in a public
 * channel to respect policies and code of conduct for bots.
 * @param  {object} message the message sent by a user
 * @return {object} formattedData The message analysed, untouched.
 */
function messageControl(message){
  console.log('Controlling message :');
  return checkAuthorMessage(message)
    .then(messageFromAUser => checkIfDirectMessage(messageFromAUser))
    .then(notADirectMessage => dataFormatter(notADirectMessage))
    .catch(err => console.error(err))
  // return checkIfDirectMessage(message)
  //   .then(notADirectMessage => dataFormatter(message))
  //   .catch(err => console.error(err))
}

module.exports = messageControl;
