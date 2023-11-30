const router = require('require').Router();
const path = require('path');

// Defined 'index.html' as res to client 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// Defined 'notes.html' as res to client 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router; 