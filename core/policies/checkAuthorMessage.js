const checkAuthorMessage = message => new Promise((resolve, reject) => {
  if(message.author.bot){
    console.log('bot message', {bot: message.author.bot});
    console.error('Oops, seems to be a bot talk. Not allowed !')
    return;
  }
  console.log('Not a bot message');
  return resolve(message);
})

module.exports = checkAuthorMessage;
