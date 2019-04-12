var moment = require('moment');

export const currentGreeting = () => {
  let currentHour = moment().hour()
  if(currentHour>=0 && currentHour <12) {
      return "GOOD MORNING"
  } else if(currentHour >= 12 && currentHour < 16) {
    return "GOOD AFTERNOON"
  } else if(currentHour >= 16){
    return "GOOD EVENING"
  }
} 