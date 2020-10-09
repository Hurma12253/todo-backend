const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../Models/UserModel')

const router = express.Router()

router.post('/user/signin',(req,res)=>{
    const {login,password} = req.body

    User.findOne({login})
        .then(async user=>{
            if(!user){
                res.status(400).send(`This user doesn't exist!`)
            }else{
                if(!await bcrypt.compare(password,user.password)){
                    res.status(400).send({message:'Invalid password!'})
                    return
                }
                res.status(200).send(user.todos)
            }
        })
})

router.post('/register',(req,res)=>{
    const {login, password} = req.body
    console.log(login, password)
})

module.exports = router