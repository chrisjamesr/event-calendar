import moment from 'moment'

function makeMonthsArray(){
  let m = moment();
  let monthsArray=[]
  //endDate & duratino to be replaced by totalDuration()
  const endDate = moment(m).year(m.year()+1)
  const duration = moment.duration(endDate.diff(m)).asMonths() 
  for (let i=duration; i>0 ; i--) {
    monthsArray.push(createMonthObject(m)
    m = moment(m).add(1,"month")
  }  
  return monthsArray
}

function createMonthObject(m){
  Object.assign({},
   {   
    monthName: m.format('MMMM'), 
    month: m.month(),
    year: m.year()
    }, {
     dates: iterateThroughMonth(m) 
    }
  );
}

function iterateThroughMonth(d){
  let month=[]
  const dNumber = d.month()
  for (let i=d.date(); i<=d.daysInMonth();i++){
    let day = {
    }
    if (d.month() === dNumber){
      month.push(moment(d))
      d = moment(d).add(1,'day')
    }
  }
  return month
}

// determine duration between current date and last scheduled event

function eventsDuration(){
  //return moment.duration
}

function totalDuration(){
  eventsDuration().asYears() < 1 ? moment.duration(12,'m'): eventsDuration().asMonths()
}

