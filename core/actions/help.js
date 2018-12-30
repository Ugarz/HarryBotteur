function help(message){
    console.log('MESSAGE', message)
    // Reply to a message
    return message.reply('Hey, I\'m a reply!')
        .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
        .catch(console.error);
}
module.exports = help;