class DateUtil{

  constructor(){

  }

  static formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const formattedDate = `${year}/${month}/${day}`;
    return formattedDate;
  }

  static getDeltaDays(date, numDays) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate() + numDays;
    const newDate = new Date(year, month, day);
    return this.formatDate(newDate);
  }

  static stringToDays(periodicity){
    let delta;
    switch(periodicity){
      case "Quincenal":
        delta = 15;
        break;
      case "Mensual":
        delta = 30;
        break;
      case "Semestral":
        delta = 182;
        break;
      case "Anual":
        delta = 365;
        break;
    }
    return delta;
  }

}

module.exports = {DateUtil};
