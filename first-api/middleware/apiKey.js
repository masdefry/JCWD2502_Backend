const apiKey = (req, res, next) => {
    const {apikey} = req.headers

    if(!apikey) return res.send('Api Key Not Found!')
    if(apikey !== 'abc12345') return res.send('Api Key Error!')

    next()
}

module.exports = {
    apiKey
}