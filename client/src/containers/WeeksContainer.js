import React from 'react'
import * as moment from 'moment'

const now = moment()
class WeeksContainer extends React.Component {
  render(){

    return(
      <div>{now}</div>
    )
  }

}