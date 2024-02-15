require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const prestationsRouter = require('./routes/prestations.routes');
const usersRouter = require('./routes/users.routes')
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, {
});

const connection = mongoose.connection;


connection.once('open', () => {
    console.log('Connected to MongoDB');
});


app.use('/login', usersRouter);
app.use('/prestations', prestationsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
