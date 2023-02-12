const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const recycleDao = require("./recycleDao");

// Provider: Read 비즈니스 로직 처리

exports.retrieveUser = async function (trashType) {
  const connection = await pool.getConnection(async (conn) => conn);
  const recycleResult = await recycleDao.selectRecycleResult(connection, trashType);

  connection.release();

  return recycleResult[0];
};