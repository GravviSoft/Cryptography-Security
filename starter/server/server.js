const express = require("express")
const cors = require("cors")

const app = express()

const port = 4004

const msgCtrl = require('./msgcontroller.js')

app.use(express.json())
app.use(cors())

app.post('/api/messages', msgCtrl.createMessage)

app.listen(port, () => console.log(`Server running on port ${4004}`))

// Horse1986!