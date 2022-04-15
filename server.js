//Dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');
//allows for PORT to change based on app environment (3001 - local host)
const PORT = process.env.PORT || 3001;
//instantiate the server
const app = express();

//parse incoming string or arry data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

//connects to routes js files to keep code modularized
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// set up listener for PORT

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});