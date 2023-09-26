var bcrypt = require('bcryptjs');

let chats = []


module.exports = {
    createMessage: (req, res)=>{
    console.log(req.body)
    const {pin, message} = req.body

    for (i=0; i<chats.length; i++) {
        let existngPswd = bcrypt.compareSync(pin, chats[i].pinHash)
        if (existngPswd){
            chats[i].messages.push(message)
            let copyCity = {...chats[i]}
            delete copyCity.pinHash
            res.status(200).send(copyCity)
            return
        }
    }

    let salt = bcrypt.genSaltSync(5);

    let pinHash = bcrypt.hashSync(pin, salt)


    console.log(salt)

    console.log(pin, pinHash)

    newObj = {pinHash: pinHash, messages: [message]}

    chats.push(newObj)

    let newCopy = {...newObj}
    delete newCopy.pinHash
    console.log(newCopy)
    res.status(200).send(newCopy)
    console.log(chats)
    }
}