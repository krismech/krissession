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
        var sql ="select name, id, location from friends"
        connection.query(sql, function(err, result, fields){
            if(err){
                throw err
            }else{

                console.log("result start")
                console.log(JSON.stringify(result))
                console.log("result ends")
            }


        })

    }
})
