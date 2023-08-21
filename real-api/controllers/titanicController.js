const conn = require('./../connection/conn');
const util = require('util');
const query = util.promisify(conn.query).bind(conn);

module.exports = {
    findPassengers: async(req, res) => {
        try {
            const {survived} = req.query
            const findAll = await query(`SELECT * FROM passengers WHERE survived = ${survived}`)
            
            res.status(200).send({
                isError: false,
                message: 'Find Passengers Success', 
                data: findAll
            })
        } catch (error) {
            
        }
    }
}   