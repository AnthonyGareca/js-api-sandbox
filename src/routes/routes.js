const { Router } = require('express');
const router = Router();

const defaultResponse = {"gretting": "Hi Andy!"}

// routes
router.get('/', (req, res) => {
    res.json(defaultResponse);
});

module.exports = router;