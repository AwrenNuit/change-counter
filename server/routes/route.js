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

module.exports = route;

