import React, { Component } from 'react';
import Loader from './Loader';

const LoaderHOC = (WrappedComponent) => {
    return  class LoaderHOC extends Component {
      render() {
        return (
          !this.props.isHiddenQrScreen ? <Loader /> : <WrappedComponent {...this.props}/>
        );
      }
    }
}
export default LoaderHOC;