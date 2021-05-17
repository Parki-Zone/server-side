const express = require('express');
const app = express();
const port = 3000;
const db = require('./database/config.js');
// const routes = require('./routers/index.js');
const router = require('./routers/user')
const routers = require('./routers/order')

var cors = require('cors')
app.use(cors())
app.use(express.json());
// app.use(express.static(__dirname + '/../client/dist/server'));


app.use("/api/ParkiZone", router)
app.use("/api/ParkiZone", routers)

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
