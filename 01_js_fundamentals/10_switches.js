const color = 'orange'

switch(color){
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is Blue');
    break;
  default:
    console.log('Color is neither blue nor red');
  break;
}

let day;

switch(new Date().getDay()){
  case 0:
    day = 'Sunday'
    break;

  case 1:
  day = 'Monday'
    break;

  case 2:
  day = 'Tueday' 
    break;

  case 3:
  day = 'Wednesday'
    break;

  case 4:
  day = 'Thursday'
    break;

  case 5:
  day = 'Friday'
    break;

  case 6:
  day = 'Saturday'
    break;
}

console.log(`Today is ${day}`);