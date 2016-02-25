import React, {Component, PropTypes} from 'react';
import DatePicker from 'react-datepicker';
import Moment from 'moment';

require('react-datepicker/dist/react-datepicker.css');

export default class BoarDatePicker extends Component {
  render() {
    const {value, ...other} = this.props;
    const theDate = (typeof this.props.value === "string") ? Moment(new Date(this.props.value)) : this.props.value;
    return (
      <DatePicker {...other} selected={theDate} dateFormat="MM/DD/YYYY" placeholderText="What day in history was the speech given?" />
    );
  }
}

BoarDatePicker.propTypes = {
  value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.instanceOf(Moment),
      React.PropTypes.instanceOf(Date)
    ])
};
