const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const { readdirSync } = require('fs');
require('dotenv').config();

//import routes
//const authRoutes = require('./routes/auth');

//app
const app = express();

//database
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
    })
    .then(() => console.log('DB CONNECTED'))
    .catch((err) => console.log('DB CONNECTION ERR', err));

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '2mb' }));
app.use(cors());

//route
// app.get('/api', (req, res) => {
//     res.json({
//         data: 'hey you hit node API',
//     });
// });

//routes middleware
//app.use('/api', authRoutes);
readdirSync('./routes').map((r) =>
    app.use('/api', require('./routes/' + r))
);

//port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
