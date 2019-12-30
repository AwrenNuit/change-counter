const router = require(`express`).Router();
const pool = require(`../modules/pool`);

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

router.put(`/:name/:id`, (req, res)=>{
  console.log('in UPDATE with:', req.params);
  let SQLquery = `UPDATE change SET quantity=$1 WHERE name=$2;`;
  pool.query(SQLquery, [req.params.id, req.params.name])
  .then(result=>{
    res.sendStatus(201);
  }).catch(error=>{
    console.log('ERROR UPDATING CHANGE ------------------------>', error);
    res.sendStatus(500);
  });
});

router.put(`/reset/:id`, (req, res)=>{
  let SQLquery = `UPDATE change SET quantity=0 WHERE id=$1;`;
  pool.query(SQLquery, [req.params.id])
  .then(result=>{
    res.sendStatus(201);
  }).catch(error=>{
    console.log('ERROR RESETTING THIS CHANGE ------------------------>', error);
    res.sendStatus(500);
  });
});

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

