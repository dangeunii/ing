async function selectRecycleResult(connection, trashType) {
    const selectRecycleResultQuery = `
                  SELECT email, nickname 
                  FROM UserInfo 
                  WHERE email = ?;
                  `;
    const [resultRows] = await connection.query(selectRecycleResultQuery, trashType);
    return resultRows;
  }