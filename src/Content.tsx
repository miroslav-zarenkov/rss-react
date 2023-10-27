import { Component } from 'react';

interface ContentProps {
  planets: object | null;
  isButtonDisabled: boolean;
}

class Content extends Component<ContentProps> {
  render() {
    const planetsString = JSON.stringify(this.props.planets, null, 1);
    return (
      <main className="main">
        <h2>Planet Data:</h2>
        <div>
          {this.props.isButtonDisabled
            ? 'Searching...'
            : planetsString.length === 2
            ? 'Not Found'
            : planetsString}
        </div>
      </main>
    );
  }
}

export default Content;
