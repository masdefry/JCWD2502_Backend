const db = require('./../models');
const {sequelize} = require('./../models')
const {Op} = require('sequelize')

module.exports = {
    search: async(req, res) => {
        try {
            const {city, total_guest, check_in, check_out} = req.query
            console.log(check_in, check_out)
            const findHotels = await db.hotel.findAll(
                {   
                    attributes: ['id', 'name', 'locations_id'], 
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

            const sumRoom = await db.hotel.findAll(
                {   
                    attributes: ['name', 'locations_id'], 
                    include: [
                        {
                            model: db.hotel_room, 
                            attributes: [[sequelize.fn('SUM', sequelize.col('total_room')), 'totalRoom']]
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
        
            sumRoom.forEach((value, index) => {
                findHotels[index].dataValues.totalRoom = value.hotel_rooms[0].dataValues.totalRoom
            })
                
            const findReservations = await db.reservation.findAll({
                include: [
                    {
                        model: db.hotel_room, 
                        attributes: ['hotels_id']
                    }
                ],
                where: {
                    [Op.or]: [{
                        check_in: {
                            [Op.between]: [check_in, check_out]
                        }
                    },{
                        check_out: {
                            [Op.between]: [check_in, check_out]
                        }
                    }]
                }
            })

            findHotels.forEach((value, index) => {
                findReservations.forEach((val, idx) => {
                    if(value.dataValues.id === val.dataValues.hotel_room.hotels_id){
                        value.dataValues.totalRoom-= val.dataValues.total_room
                    }
                    
                })
            })

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
    },

    create: async(req, res) => {
        try {
            const data = JSON.parse(req.body.data)
            const createdHotel = await db.hotel.create({...data})

            const dataImage = req.files.images.map(value => {
                return {url: value.path, hotels_id: createdHotel.id}
            })
            
            await db.hotel_image.bulkCreate(dataImage)

        } catch (error) {
         console.log(error)   
        }
    }
}