import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import success from "./../assets/img/mascot_my_forms.png";
import warning from "./../assets/img/404_podo_qr.png";
import LoaderHOC from './LoaderHOC';
//Statemiz değiştiğinde props içerisindeki subId arrayin içerisinde qr dan gelen sub ıd karşılaştırılır.
//Eğer qrdan gelen sub ıd propstaki ile uyuşuyor ise ekrana hoşgeldiniz.
//Eğer qr dan gelen sonuc propstaki arrayda yok ise qr geçersiz.
const Success = (props) => (
  <div>
    <p>Welcome, {props.result[1]}. Have a good time.</p>
    <img src={success} alt="Enjoy with JotForm" width="100px" className="img" />
  </div>
);
const Warning = () =>
  <div>
    <p>Please scan the QR code transmitted to your email.</p>
    <img src={warning} alt="Enjoy with JotForm" width="70px" className="img" />
  </div>;
class QrReaderCheck extends Component{
  constructor(props) {
    super(props);
    this.state = {
      delay: 2000,
      result: "",
      success:0
    };
    this.handleScan = this.handleScan.bind(this);
  }
  //1- Qr kod okunur iken loader
  componentWillUpdate = (nextProps,nextState) => {
    if (this.props.submissions.some(function (subId) {
      return subId === nextState.result[0];
    })) {
      setTimeout(() => this.setState({
        success: 1
      }), 200);
    }else{
      setTimeout(() => this.setState({ success: 0 }), 200);
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    return nextState.result[0] === this.state.result[0]
  }
  handleScan(data) {
    if (data) {
      let resultId = data.substr(0, 19);
      let name = data.substr(20, data.length - 21);
      this.setState({
        result: [resultId, name]
      });
    }
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    return <div className="mt-2">
      <QrReader delay={this.state.delay} onError={this.handleError} onScan={this.handleScan} className="qr-reader" />
      <div className="mt-2">
        {this.state.success === 1 ? (
          <Success {...this.state} />
        ) : (
          <Warning />
        )}
      </div>
    </div>;
  }
}
export default LoaderHOC(QrReaderCheck);