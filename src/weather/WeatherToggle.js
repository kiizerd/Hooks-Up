import React from 'react';
import './WeatherToggle.css';

class WeatherToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonText: props.hidden ? 'Show' : 'Hide'
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    let hidden = this.state.buttonText == 'Hide'
    this.setState({
      buttonText: hidden ? 'Show' : 'Hide'
    });

    document.toggleWeatherWidget();
  }

  render() {
    return(
      <button className="WeatherToggle" onClick={this.toggle}>
        {this.state.buttonText} Forecast
      </button>
    );
  }
}

export default WeatherToggle;