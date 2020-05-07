import React, { Component } from 'react';

class Rank extends Component {
  constructor() {
    super();
    this.setState = {
      emoji: ''
    }
  }

  generateEmoji = (entries) => {
    fetch(`https://lg08whl7f3.execute-api.eu-central-1.amazonaws.com/prod/rank?rank=${entries}`)
      .then(res => res.json())
      .then(data => this.setState({ emoji: data.input }))
      .catch(console.log)
  }

  componentDidMount() {
    this.generateEmoji(this.props.entries);
  }

  render() {
    return (
      <div>
        <div className='white f3'>
          {`${this.props.name}, your current entry count is...`}
        </div>
        <div className='white f1'>
          {this.props.entries}
        </div>
        <div className='white f1'>
          {/* {`Rank badge: ${this.state.emoji}`} */}
        </div>
      </div >
    );
  }
}

export default Rank;