const conn = require('./../connection/conn');
const util = require('util');
const query = util.promisify(conn.query).bind(conn)

module.exports = {
    filterProducts: async(req, res) => {
       try {
        const {categoryId} = req.query 
        const arrCategoryId = categoryId.split('-')
        
        let queryFilter = 'SELECT * FROM products p WHERE '
        let newArray = arrCategoryId.map(value => {
            return `categories_id = ${value}`
        })
        newArray = newArray.join(' OR ')
        queryFilter += newArray
        
        const filteredByCategoryId = await query(queryFilter)

        res.status(200).send({
            isError: false, 
            message: 'Filter Success', 
            data: filteredByCategoryId
        })
       } catch (error) {
        console.log(error)
       } 
    },

    detail: async(req, res) => {
        try {
            const {id} = req.params 

            const findDetail = await query(`SELECT p.id, p.name, p.price, pi.url, phs.stocks, s.size FROM products p 
            JOIN products_images pi ON p.id = pi.products_id
            JOIN products_has_sizes phs ON p.id = phs.products_id
            JOIN sizes s ON phs.sizes_id = s.id
            WHERE p.id = ?`, [id])

            const dataToSend = {
                id: findDetail[0].id, 
                name: findDetail[0].name, 
                price: findDetail[0].price, 
                images: [], 
                stocks: [], 
                sizes: []
            }

            findDetail.forEach((value) => {
                if(!dataToSend.images.includes(value.url)) dataToSend.images.push(value.url)
                if(!dataToSend.sizes.includes(value.size)) dataToSend.sizes.push(value.size)
                if(dataToSend.stocks.length < dataToSend.sizes.length) dataToSend.stocks.push(value.stocks)
            })

            res.status(200).send({
                isError: false, 
                message: 'Ok', 
                data: dataToSend
            })
        } catch (error) {
            
        }
    }
}


// {
//     name: 'Kaos', 
//     price: 100000, 
//     size: ['S', 'M', 'L'],
//     images: ['Img1', 'Img2', ...], 
//     stocks: [10, 20, 30]
// }