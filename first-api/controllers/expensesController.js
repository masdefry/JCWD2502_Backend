const fs = require('fs')

module.exports = {
    updateExpense: (req, res) => {
        try {
            const {id} = req.params

            const data = JSON.parse(fs.readFileSync('./db/db.json'))
            const expenses = [...data.expenses]  

            const dataToEdit = expenses.find(value => {
                return value.id === Number(id)
            })
            
            const dataEdited = {
                ...dataToEdit, ...req.body 
            }

            console.log(dataEdited)
        } catch (error) {
            console.log(error)
        }
    }
}