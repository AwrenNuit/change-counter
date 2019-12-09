const route = require(`express`).Router();
const pool = require(`../modules/pool`);

route.get(`/`, (req, res)=>{
  let SQLquery = `SELECT * FROM change ORDER BY id;`;
  pool.query(SQLquery)
  .then(result=>{
    res.send(result.rows);
  }).catch(error=>{
    console.log('ERROR GETTING CHANGE ------------------------>', error);
    res.sendStatus(500);
  })
})

route.post(`/:name`, (req, res)=>{
  let SQLquery = `UPDATE change SET quantity=quantity+1 WHERE name=$1;`;
  pool.query(SQLquery, [req.params.name])
  .then(result=>{
    res.send(201);
  }).catch(error=>{
    console.log('ERROR POSTING CHANGE ------------------------>', error);
    res.sendStatus(500);
  })
})

route.put(`/reset/:id`, (req, res)=>{
  let SQLquery = `UPDATE change SET quantity=0 WHERE id=$1;`;
  pool.query(SQLquery, [req.params.id])
  .then(result=>{
    res.send(201);
  }).catch(error=>{
    console.log('ERROR RESETTING THIS CHANGE ------------------------>', error);
    res.sendStatus(500);
  })
})

route.put(`/reset`, (req, res)=>{
  let SQLquery = `UPDATE change SET quantity=0;`;
  pool.query(SQLquery)
  .then(result=>{
    res.send(201);
  }).catch(error=>{
    console.log('ERROR RESETTING CHANGE ------------------------>', error);
    res.sendStatus(500);
  })
})

module.exports = route;

