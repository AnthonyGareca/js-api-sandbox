const { Router } = require('express');
const route = Router();

const fetch = require('node-fetch');

route.get('/', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    res.json(users);
});

module.exports = route;