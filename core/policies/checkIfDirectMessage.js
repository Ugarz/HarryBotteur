const checkIfDirectMessage = message => new Promise((resolve, reject) => {
  if(message.channel.type === 'dm'){
    console.log('DM message');
    const error = new Error()
    error.message = 'Oops, seems to be a direct message. Not allowed !'
    console.error(error.message)
    return reject(error);
  }
  console.log('Not a DM message');
  return resolve(message);
})

module.exports = checkIfDirectMessage;
