const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorhandler.middleware.js');
const authMiddleware = require('./middlewares/auth.middleware.js');
const authRoutes = require('./routes/auth.routes.js');
const farmRoutes = require('./routes/farm.route.js');
const app = express();
app.use(cors());
app.use(express.json());

//importacion rutas
app.use('/api/auth', authRoutes);
app.use('/api/farm', authMiddleware,  farmRoutes);



app.use(errorHandler);

module.exports = app;