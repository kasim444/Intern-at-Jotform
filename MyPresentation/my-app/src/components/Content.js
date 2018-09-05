import React, { Component } from 'react'
import Slogan from './Slogan';
import QrReaderCheck from './QrReaderCheck';
import YourForms from './YourForms';
import SelectBox from './SelectBox';
export default class Content extends Component {
  state={
    isHiddenQrScreen:false,
    submissions:[]
  }
  handleQrScreen = () => this.setState({ isHiddenQrScreen: true });
  handleSetStateSubmissions = (data) => this.setState({submissions:data});
  render() {
    return <div>
        <Slogan />
        <YourForms />
        <SelectBox handleQrScreen={this.handleQrScreen} handleSetStateSubmissions={this.handleSetStateSubmissions} />
        {this.state.isHiddenQrScreen && <QrReaderCheck {...this.state} />}
      </div>;
  }
}
//1- Boş durumu
//2- Basıldığında loader ekranı 1 saniyelik
//3- QrCheckScreen'in gelmesi