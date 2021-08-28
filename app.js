if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const port = 3000;
const errorHandle = require('./middleware/errorHandler');
const cors = require('cors');

app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const routeIndex = require('./routes/index');

app.use('/', routeIndex);

// app.use((req, res, next) => {
//     res.status(404).json({msg: 'error not found'})
// })

app.use(errorHandle);

app.listen(port ,() => {
    console.log(`${port} ada`);
});