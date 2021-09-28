const { app } = require('./server.js'); 

//we declare a port ahead of time, we need to allow Heroku to decide the port, we cannot tell Heroku which port to use. 
const port = process.env.PORT || 3000; 

app.listen(port, ()=> {
    console.log(`App listening at http://localhost:${port}`);
});