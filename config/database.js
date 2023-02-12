const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: 'bridgedb.cwqjvuxzuylj.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    port: '3306',
    password: 'imnotagarbage',
    database: 'bridgedb'
});

module.exports = {
    pool: pool
};