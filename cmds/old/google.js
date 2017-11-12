const Command = require('./command')

module.exports = class Google extends Command {
    static match(message){
        return message.content.startsWith('!google')
    }
    static action (message){
        let args = message.content.split(' ')
        // delete first element
        args.shift()
        // add elements
        message.delete()
        message.reply('https://www.google.fr/search?source=' + args.join('%20'))
    }
}
