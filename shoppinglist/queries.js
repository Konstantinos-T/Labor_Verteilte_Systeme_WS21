const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.PG_USERNAME,
    //user: "konstantinostsolakidis",
    host: process.env.PG_HOSTNAME,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: "5432"
})

const getItems = (req, res) => {

    pool.query('SELECT * FROM items ORDER BY id ASC', (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

const getItemById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM items WHERE id=$1', [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}


const createItem = (req, res) => {
    
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var created = date+' '+time;
    const {name, quantity, complete } = req.body

    pool.query('INSERT INTO items (name,quantity,complete,created) VALUES ($1,$2,$3,$4)', [name,quantity,complete,created], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).send("Item added")
    })
}


const updateItem = (req, res) => {

    const id = parseInt(req.params.id)
    const {name, email} = req.body

    pool.query(
        'UPDATE items SET name = $1, quantity = $2 , complete = $3 WHERE id =$4',
        [name, quantity, complete, id], 
        (err, results) => {
            if(err) {
                throw err
            }
            res.status(200).send(`Item modified with ID: ${id}`)
        }
    )
}

const deletItem = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM items WHERE id=$1',[id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = { getItems, getItemById, createItem, updateItem, deletItem } 