const axios = require('axios')
const APIKey = '8de6120dbce543aeb5f9cd66d857b517'
const baseURL = 'https://newsapi.org/v2/'

const info = () => 'This is our data lagoon server!!!'

// update the name here!
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

//to-do: see if these can be consolidated ^^
const nytimesContent = async () => {
    try {
        const response = await axios.get(`${baseURL}everything?domains=nytimes.com&from=2019-07-08&to=2019-07-09&apiKey=${APIKey}`)
        const items = await response.data.articles
        return items
    }
    catch (error) {
        console.log(`There was an error! - ${error}`)
    }
}


module.exports = {
    info,
    getContent,
    nytimesContent
}

