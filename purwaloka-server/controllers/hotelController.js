const db = require('./../models');
const {sequelize} = require('./../models')

module.exports = {
    search: async(req, res) => {
        try {
            const {city, total_guest, check_in, check_out} = req.query
            
            const findHotels = await db.hotel.findAll(
                {   
                    attributes: ['name', 'locations_id'], 
                    include: [
                        {
                            model: db.hotel_image,
                            attributes: ['url']
                        }, 
                        {
                            model: db.hotel_room, 
                            attributes: [[sequelize.fn('MIN', sequelize.col('price')), 'minPrice']]
                        }, 
                        {
                            model: db.location, 
                            attributes: ['city'],
                            where: {city: city}, 
                        }
                    ],
                    group: ['hotel.id']
                }
            )

            res.status(200).send({
                isError: false, 
                message: 'Find Hotels Success',
                data: findHotels
            })
        } catch (error) {
            res.status(500).send({
                isError: true, 
                message: error.message, 
                data: null
            })
        }
    }
}