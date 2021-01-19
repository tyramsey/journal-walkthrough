let express = require('express');
let app = express();
let sequelize = require('./db');

let journal = require('./controllers/journalcontroller')
let user = require('./controllers/usercontroller')
sequelize.sync();

app.use('/user', user);

app.use('/journal', journal);

app.listen(3000, function(){
    console.log('App is listening on port 3000')
});

// localhost:3000

//localhost:3000/test