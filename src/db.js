/* eslint-disable no-undef */
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "arduino",
    password: "ayush123",
    port: 5432,
})

module.exports = pool;