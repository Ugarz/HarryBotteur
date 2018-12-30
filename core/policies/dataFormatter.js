/**
 * The data formatter to give a simpler interface of data
 * @param {object} message 
 */
const dataFormatter = message => new Promise((resolve, reject) => {
    console.log('Formatting data..')
        
    let order = message.content.split(' ')
    console.log('The full command', order);
    
    const command = order[0];
    console.log('The command is :', command);
    
    const prefix = command.charAt(0);
    console.log('The prefix is :', prefix);
    
    const cleanedCommand = command.replace("!", "");
    console.log('The cleaned command is :', cleanedCommand);
    
    return resolve(message)
    // return resolve({
    //     options: {
    //         controls: true,
    //         content: message.content,
    //         command: cleanedCommand,
    //         prefix: prefix || '',
    //         id: message.id
    //     },
    //     controlledMessage: message
    // })
  })
  

module.exports = dataFormatter;