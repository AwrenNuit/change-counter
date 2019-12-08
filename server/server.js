const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const change = require(`./routes/route`);
const PORT = process.env.PORT || 5000;

app.use(express.static(`server/public`));
app.use(bodyParser.urlencoded({extended:true}));
app.use(`/change`, change);

app.listen(PORT, ()=>{
    console.log('server up on:', PORT);
})