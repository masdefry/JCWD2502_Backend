const apiKey = (req, res, next) => {
    console.log(req.headers)
    const {apikey} = req.headers
    console.log(apikey)

    if(!apikey) return res.send('Api Key Not Found!')
    if(apikey !== 'abc12345') return res.send('Api Key Error!')

    next()
}

module.exports = {
    apiKey
}