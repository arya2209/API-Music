let mysql = require ('mysql')

let koneksi = mysql.createConnection({
    host:'localhost',
    user:'root', 
    password:'', 
    database:'api_arya'
})

koneksi.connect(function(error) {
    if(!!error){
        console.log(error)
    }
    else{
        console.log('connection success')
    }
    
})

module.exports = koneksi