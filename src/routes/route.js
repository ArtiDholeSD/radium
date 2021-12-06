const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});



const internController = require('../controllers/internController');
const collegeController = require('../controllers/collegeController')



// Intern routes
router.post('/functionup/interns', internController.registerIntern);
//router.get('/getinterns', internController.getinterns);


// college routes
router.post('/functionup/colleges',  collegeController.createCollege);
router.get('/functionup/collegeDetails', collegeController.getAllIntern);





module.exports = router;


