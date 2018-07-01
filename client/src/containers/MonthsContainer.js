import React from 'react'
import {dateObject, calendar} from '../utils/calendar'
import Month from '../components/Month'


export default class MonthsContainer extends React.Component {
  render(){
    const months = calendar;
    debugger
    return(
      <div>
        <Month  />
      </div>
    )
  }

}