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

// Update single coin/bill quantity
router.put(`/:id/:qty`, (req, res)=>{
  let SQLquery = `UPDATE change SET quantity=$1 WHERE id=$2;`;
  pool.query(SQLquery, [req.params.qty, req.params.id])
  .then(result=>{
    res.sendStatus(201);
  }).catch(error=>{
    console.log('ERROR UPDATING CHANGE ------------------------>', error);
    res.sendStatus(500);
  });
});

// Reset all coin quantities after total is rendered
router.put(`/reset`, (req, res)=>{
  let SQLquery = `UPDATE change SET quantity=0;`;
  pool.query(SQLquery)
  .then(result=>{
    res.sendStatus(201);
  }).catch(error=>{
    console.log('ERROR RESETTING ALL CHANGE ------------------------>', error);
    res.sendStatus(500);
  });
});

module.exports = router;