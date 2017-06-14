const Command = require('./command')
const config = require('../config.json')
const omit = require('lodash/omit')

// Bnet client
const Battlenet = require('battlenet.js')
const bnetClient = new Battlenet(config.bnet.key, {
    region: 'us',
    locale: 'en_US'
});
const wClient = bnetClient.warcraft;

module.exports = class Profile extends Command {
    
    static match(message){
        return message.content.startsWith('!profile')
    }
    
    static action (message){
        console.log(message.content)
        const fields = ['feed', 'guild'];
        wClient.getCharacter('Hyjal', 'Carbø', fields, function(err, response) {
            if (err) throw err;
            const generalDatas = omit(response, ['guild', 'feed'])
            console.log(generalDatas)
            message.reply(`Désolé, je ne trouve pas ton profile, je te préfère de face.`, {tts: true})
        });
    }
}
