const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.post('/api/users/:id/update', (req, res) => { // response olarak body icinde handleUpdate icindeki updateUser2'den parametre olarak bana gonderilen(yani user) datayi donduruyorum
    setTimeout(() => {
        res.send(req.body)
    }, [2000])
})

app.listen(8080, () => {
    console.log('Backend server is running');
})