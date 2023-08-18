const fs = require('fs')

module.exports = {
    filter: (req, res) => {
        try {
            // Step1. Ambil data dari client
            let {location, status, time} = req.query

            location = location?.replace('%', ' ')
            status = status?.replace('%', ' ')

            
            // Step2. Ambil data dari db.json
            const {movies} = JSON.parse(fs.readFileSync('./db/db.json'))
            
            // Step3. Manipulasi data dari db.json
            let filteredMovies = [...movies]
            // console.log(filteredMovies)

            // const moviesFiltered = movies.filter(value => {
            //     return ((location? location === value.location : true) 
            //         && (status? status === value.status : true) && (time? time === value.time : true))  
            // })

            if(location){
               filteredMovies = filteredMovies.filter(value => {
                    return location === value.location
                })
            }
            
            if(status){
                filteredMovies = filteredMovies.filter(value => {
                    return status === value.status 
                })
            }
            
            if(time){
                filteredMovies = filteredMovies.filter(value => {
                    return time === value.time
                })
            }
            
            // Step4. Kirim response
            res.send(filteredMovies)
        } catch (error) { // error = {message: }
            res.send(error.message)
        }
    }
}