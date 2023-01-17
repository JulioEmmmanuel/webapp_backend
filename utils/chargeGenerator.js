const {DateUtil} = require("./date.util");
const ChargesService = require("../services/charges.service");

let instance;
let globalState = {
  charges: {},
  service: null
}

class ChargeGenerator {

  constructor(){
    if(instance){
      throw new Error("No se puede crear una nueva instancia");
    }

    instance = this;
    globalState.charges = {}
    globalState.service = new ChargesService();
  }

  addCharge(date, data) {
    if(!globalState.charges[date]){
      globalState.charges[date] = [];
    }
    globalState.charges[date].push(data);
  }

  genDailyCharges(day) {

    const formattedDate =  DateUtil.formatDate(day);

    if(globalState.charges[formattedDate]){

      globalState.charges[formattedDate].map(charge => {

        globalState.service.create(charge.data);
        let nextDate = DateUtil.getDeltaDays(day, charge.periodicity);
        this.addCharge(nextDate, charge);
      })

      delete globalState.charges[formattedDate];

    }

  }


}

const ChargeGeneratorInstance = Object.freeze(new ChargeGenerator());

module.exports = {ChargeGeneratorInstance};


