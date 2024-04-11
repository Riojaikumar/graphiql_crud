const Pool = require("pg").Pool;

const pool =new Pool({
    user: "postgres",
    password:"jaikumar",
    host:"localhost",
    port:5432,
    database:"employe"
})
module.exports = pool;
