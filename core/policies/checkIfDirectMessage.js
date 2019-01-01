/**
 * Check if this is a direct message wich is not allowed
 * @param {object} message 
 */
const checkIfDirectMessage = message => new Promise((resolve, reject) => {
  if (message.channel.type === 'dm') {
    console.log('DM message');
    const error = new Error('Oops, seems to be a direct message. Not allowed !')
    error.code = "DIRECT_MESSAGE_CODE_NOT_PERMIT"
    return reject(error);
  }
  console.log('Not a DM message');
  return resolve(message);
})

module.exports = checkIfDirectMessage;
