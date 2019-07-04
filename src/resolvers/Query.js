const axios = require('axios')

const info = () => 'This is our data lagoon server!!!'

const getContent = async (parent, args) => {
    const { stationID } = args
    try {
        const response = await axios.get(``)
        const items = await response.data.data.items
        return items
    }
    catch (error) {
        console.log(error)
    }
}

const getItem = async (parent, args) => {
    const { stationID, id } = args
    try {
        const response = await axios.get(``)
        console.log('le response', response.data.data)
        const item = await response.data.data
        return item
    }
    catch (error) {
        console.error(error)
    }
}

module.exports = {
    info,
    getContent,
    getItem
}