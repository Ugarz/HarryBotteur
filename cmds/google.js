const Command = require('./command')

module.exports = class Google extends Command {
    static match(message){
        return message.content.startsWith('!google')
    }
    static action (message){
        console.log('action match', message)
        let args = message.content.split(' ')
        // delte first element
        args.shift()
        // add elements
        message.delete()
        message.reply('https://www.google.fr/#q=' + args.join('%20'))
    }
}
