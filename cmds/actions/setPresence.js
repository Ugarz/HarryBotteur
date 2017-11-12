function setPresence(bot, content){
  let presence = { game: { name: content } }
  console.log('Presence set at: ', content);
  return bot.user.setPresence(presence)
  // bot.user.setGame('Overwatch').catch(console.error)
}

module.exports = setPresence;
