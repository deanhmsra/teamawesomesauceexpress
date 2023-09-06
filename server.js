// Dependencies
const express = require('express')
const app = express();
const { Sequelize } = require('sequelize');

const usersController = require('./controllers/users_controller');

// Configuration / Middleware
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/users', usersController);

// Root
app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'Welcome to APP NAME!' 
    })
})

// Listen
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`)
})