import React from 'react';
 
class ControlledInput extends React.Component {
  constructor() {
    super();
 
    this.state = {
      value: '',
    };
  }
 
  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }
 
  render() {
    return (
    <div>
   	<input
        type="text" 
        value={this.state.value} 
        onChange={this.handleChange}
      />
      {this.state.value}
       </div> 
     );
  }
}
 
export default ControlledInput;