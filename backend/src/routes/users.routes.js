const { Router } = require('express');

const router = Router();

const User = require('../models/User.model');

const faker = require('faker');

router.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.json({users});
});

router.get('/api/users/create', async (req, res) => {
    let iterator = 10
    for (let i = 0; i < iterator; i++) {
        await User.create({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            avatar: faker.image.avatar()
        });
    }
    let message = iterator + ' Users created';
    res.json({message});
});

module.exports = router;