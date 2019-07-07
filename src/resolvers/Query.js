const axios = require('axios')
const APIKey = '8de6120dbce543aeb5f9cd66d857b517'
const baseURL = 'https://newsapi.org/v2/'

const info = () => 'This is our data lagoon server!!!'

const getContent = async () => {
    try {
        const response = await axios.get(`${baseURL}top-headlines?country=us&apiKey=${APIKey}`)
        const items = await response.data.articles
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