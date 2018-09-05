import React, { Component } from 'react';
export default class SelectBox extends Component {
  state={
      forms:[],
      submissions:[]
  }
  componentDidMount() {
    fetch("https://api.jotform.com/user/forms&apiKey=a07d6a84de54aeedf77f0888619f067d")
    .then(response => response.json())
    .then(data => this.setState({forms:data.content}));
  }
  getFormSubmis = (e) => {
    const formId = e.target.value;
    fetch("https://api.jotform.com/form/" + formId + "/submissions?apiKey=a07d6a84de54aeedf77f0888619f067d&limit=100")
      .then(response => response.json())
      .then(data => {
        const subId = [];
        data.content.map(subID => subId.push(subID.id));
        this.props.handleSetStateSubmissions(subId);
      });
    this.props.handleQrScreen();
  }
  render() {
  const {forms} =this.state;
  return (
    <div>
      <span className='custom-dropdown'>
        <select id='mySelect' onChange={this.getFormSubmis} value={this.state.value}>
      <option value="" selected> Please select the form</option>
      {forms.map( form => 
          <option key={form.id} value={form.id}>{form.title}</option>
      )}
      </select></span>
    </div>
  )
  }
}
