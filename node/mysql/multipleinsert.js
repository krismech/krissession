var mysqldb = require('mysql')

var connection = mysqldb.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbfromnode789'

})

connection.connect(function (err) {
    if (err) {
        throw err
    } else {

        console.log("Connected to MySQL servere!!")
        var sql ="insert into  friends (name , id , location) values ?"


        var records =[

            ['kris', 3, 'chennai'],
            ['mallik',4,  'delhi'],
            ['julie', 5, 'coimbatore'],
        ]
        connection.query(sql,[records], function(err, suc){
            if (err){
                throw err
            }else{
                console.log("3 Rows inserted!!")
            }

        })

    }
})