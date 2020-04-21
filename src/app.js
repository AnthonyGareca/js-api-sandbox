const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;


// settings
app.set('port', process.env.PORT || port);
app.set('json spaces', 2);

// middleware
// morgan formats: combined, common, dev, short, tiny
app.use(morgan('dev'));
// understanding forms data
app.use(express.urlencoded({extended: false}));
// support json format
app.use(express.json());

// routes
app.use(require('./routes/routes'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/users', require('./routes/users'));

// starting server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}.`);
});