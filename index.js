const {config} = require('./config/config');
const {createApp} = require('./app');

const app = createApp();

app.listen(config.port, ()=>{
  console.log("Corriendo servidor en " + config.port);
});
