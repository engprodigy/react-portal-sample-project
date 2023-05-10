import React from 'react';
import ReactDOM from 'react-dom';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.getElementById(props.tooltipId);
  }

  // componentDidMount() {

  // }
  // componentWillUnmount() {

  // }
  render() {
    return ReactDOM.createPortal(<p> {this.props.text} </p>, this.el);
  }
}
export default Tooltip;
