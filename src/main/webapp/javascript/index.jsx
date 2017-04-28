import ReactDOM from 'react-dom';
import React from 'react';
import DateRangePicker from 'react-daterange-picker';
import 'react-daterange-picker/dist/css/react-calendar.css';

const dateRanges = [];

const stateDefinitions = {
  available: {
    color: null,
    label: 'Available',
  }
};


class HelloWorld extends React.Component{
 	constructor(props) {
    super(props);

    this.state = {
      value: null,
      states: null
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(range, states) {
    this.setState({
      value: range,
      states: states
    });
  }
    
  render(){
  	
    return (
      <DateRangePicker
      firstOfWeek={1}
      numberOfCalendars={this.props.numberOfCalendars}
      selectionType={this.props.selectionType}
      minimumDate={new Date()}
      stateDefinitions={stateDefinitions}
      dateStates={dateRanges}
      defaultState="available"
      showLegend={false}
      value={this.state.value}
      onSelect={this.handleSelect} />
    )
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('content'));