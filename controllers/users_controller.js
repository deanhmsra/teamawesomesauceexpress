const users = require('express').Router();
const db = require('../models');
const { User } = db;

users.get('/', async (req, res) => {
    try {
        const foundUsers = await User.findAll();
        res.status(200).json(foundUsers);
    } catch (e) {
        res.status(500).json(e);
    }
});

users.get('/:id', async (req, res) => {
    try {
        const foundUser = await User.findONe({
            where: {
                user_id: req.params.id
            }
        });
        res.status(200).json(foundUser);
    } catch (e) {
        res.status(500).json(e)
    }
})

users.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).json({
            message: 'Successfully created new user',
            data: newUser
        })
    } catch (error) {
        res.status(500).json(error);
    }
})

users.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await User.update(req.body, {
            where: {
                user_id: id
            }
        });
        res.status(200).json({
            message: 'Successfully updated the user',
            updatedUser
        })
    } catch (error) {
        res.status(500).json(error);
    }
});

users.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.destroy({
            where: {
                user_id: id
            }
        })
        res.status(200).json({
            message: `Successfully deleted user id: ${id}`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = users;