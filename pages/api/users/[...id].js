// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});


export default function handler(req, res){ 
const {id} = req.query
// simple query
connection.query(
    'SELECT * FROM tbl_users WHERE id = ?',[id],
    function(err, results) {
      console.log(results); // results contains rows returned by server
      res.status(200).json({users: results}) ;
    }
  );
}