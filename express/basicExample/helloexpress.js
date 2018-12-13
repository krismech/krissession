var express = require('express')
var app = express()
var bodyParser=require('body-parser') 
var ejs= require('ejs')
app.set('view engine', 'ejs')
app.set('views', __dirname+ '/views')
var urlEncodedParser= bodyParser.urlencoded({extended:false})


app.get('/', function (req, res) {

   // res.send(" I am on homepage! " + __dirname)
    //res.sendFile(__dirname + '/home.html')
    res.render('home')

})

app.get('/about', function (req, res) {
    //res.sendFile(__dirname + '/about.html')
    console.log(req.query)
    res.render('about', {
        urlData: req.query,
        })

})

app.get('/contact', function (req, res) {
  // res.sendFile(__dirname + '/contact.html')
  res.render('contact')
})


app.post('/contact',urlEncodedParser, function(req, res){
    console.log(req.query)
    //res.send("Received info " + JSON.stringify(req.body))
res.render('contactsuccess')
})

app.get('/profile/:name', function (req, res) {

    //res.send("I am on profile page of " + req.params.id)

    var personData = {age:30, 
        location: 'Coimbatore',
        hobbies:['swimming','cricket','gaming', 'driving' ]
    }
    res.render('profile', {
        personName: req.params.name,
        data:personData
        })

})

app.listen(8888)
