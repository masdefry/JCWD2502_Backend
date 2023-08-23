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
    },

    findPassenger: async(req, res) => {
        try {
            const {name, pclass} = req.query 
            console.log(name)
            const findOne = await query(`SELECT * FROM passengers WHERE Name LIKE ?`, [`%${name}%`]) // 1
            await query(`SELECT COUNT(*) FROM passengers WHERE survived = 1`) // 2
            const findMaleFemale = await query('SELECT Sex, COUNT(*) as Total FROM passengers WHERE survived = 1 GROUP BY sex;') // 2
            const findClass = await query(`SELECT * FROM passengers WHERE Survived = 1 AND PClass = ?`, [pclass]) // 3
            console.log(findClass)
        } catch (error) {
            console.log(error)
        }
    }
}   