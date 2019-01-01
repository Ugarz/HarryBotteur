const axios = require('axios')
/**
 * Ping ?
 * @param {object} message
 */
function fetchPlannings(message) {
    return axios.get('http://localhost:30007/api/plans')
        .then((response) => message.reply('Plannings ok'))
        .catch(error => console.log('lol error'))
}

module.exports = fetchPlannings;
