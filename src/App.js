import React from 'react';
import './style.css';
import Tooltip from './Tooltip';

class App extends React.Component {
  state = {
    text: '',
  };

  onDocumentClick = (event) => {
    if (event.target.tagName === 'BUTTON') {
      this.setState({ text: event.target.textContent });
    }
  };

  componentDidMount() {
    document.addEventListener('click', this.onDocumentClick);
  }
  componentWillUnmount() {
    document.addEventListener('click', this.onDocumentClick);
  }

  render() {
    return (
      <div>
        {this.props.children}
        <Tooltip text={this.state.text} tooltipId={this.props.tooltipId} />
      </div>
    );
  }
}

export default App;
