import { Component } from 'react';

interface ContentProps {
  planets: object | null;
}

class Content extends Component<ContentProps> {
  render() {
    return (
      <main className="main">
        <h2>Planet Data:</h2>
        <div>{JSON.stringify(this.props.planets, null, 1)}</div>
      </main>
    );
  }
}

export default Content;
