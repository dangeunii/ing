async function selectRecycleResult(connection, trashType) {
    const selectRecycleResultQuery = `
                  SELECT * 
                  FROM Garbage 
                  WHERE trash = ? ;
                  `;
    const [resultRows] = await connection.query(selectRecycleResultQuery, trashType);
    return resultRows;
  }