const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.useconst express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;

//module 2
const demo = express.Router();

demo.get('/movies', function (req, res) {
    const arr=["abc","harry potter","quanshi fashi"]
    res.send(arr)
});


module.exports = demo;



router.get('/movies/:movieIndex', function (req, res) {
    const arr=["abc0","harry potter1","quanshi fashi2","quanshi fashi3","quanshi fashi4"]
    let index = req.params.movieIndex
    let movieAtindex  = arr[index]
    //res.send(movieAtindex)
    
    // let value=req.params.index
    // console.log(arr[index])
    if( movieAtindex > arr.length)
    {
        res.send("enter index in range")
    }else{
        res.send(movieAtindex)
    }
});
module.exports = router;
    


//module 3


router.get('/film', function (req, res) {
    const arr=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Demo'
       }]
    res.send(arr)
});

//   http://localhost:3000/film

module.exports =router;

router.get('/films/:filmId', function (req, res) {
    const mv=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Demo'
       }]
    let id = req.params.filmId
    let movieAt= mv[id]
    if(id<mv.length)
    {
        res.send(movieAt)
    }
    else
    {
        res.send('invalid')
    }
    // console.log(typeof value )
    // let found=false;
    // for(i=0;i<mv.length;i++)
    // { 
        
    // if(mv[i].id===value)
    // {
    //     found=true
    //     res.send(mv[i])
    //    break
    // }
    // }
    // if(found===false)
    // res.send("no movie exist with this id")
    
});
module.exports = router;('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});