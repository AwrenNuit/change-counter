const router = require(`express`).Router();
const pool = require(`../modules/pool`);

// GET all data
router.get(`/`, (req, res)=>{
  let SQLquery = `SELECT * FROM change ORDER BY id;`;
  pool.query(SQLquery)
  .then(result=>{
    res.send(result.rows);
  }).catch(error=>{
    console.log('ERROR GETTING CHANGE ------------------------>', error);
    res.sendStatus(500);
  });
});

module.exports = router;