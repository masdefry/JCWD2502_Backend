const apiKey = (req, res, next) => {
    const {apiKey} = req.body

    if(!apiKey) return res.send('Api Key Not Found!')
    if(apiKey !== 'abc12345') return res.send('Api Key Error!')

    next()
}

module.exports = {
    apiKey
}