const {ChargeGeneratorInstance} = require('./chargeGenerator');
const {DateUtil} = require('./date.util');

let instance;
let globalState = {
  date: null,
  running: false
};

class Timer{

  constructor(){
    if(instance){
      throw new Error("No se puede crear una nueva instancia");
    }

    instance = this;
    globalState.date = new Date();
    globalState.running = false;
  }

  getToday(){
    return globalState.date;
  }

  turnDay() {
    const today = globalState.date.getDate();
    globalState.date.setDate(today+1);
    ChargeGeneratorInstance.genDailyCharges(globalState.date);
  }

  run() {
    if(!globalState.running){
      globalState.running = true;
      setInterval(instance.turnDay, 2000);
    }
  }
}

const TimerInstance = Object.freeze(new Timer());

module.exports = {TimerInstance};




