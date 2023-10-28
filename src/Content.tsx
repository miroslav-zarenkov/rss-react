import { Component } from 'react';
import PlanetCard from './PlanetCard';

interface ContentProps {
  planets: Array<{ name: string; climate: string; population: string }> | null;
  isButtonDisabled: boolean;
}

class Content extends Component<ContentProps> {
  render() {
    const { planets, isButtonDisabled } = this.props;
    if (isButtonDisabled) {
      return (
        <main className="main">
          <h2>Planet Data:</h2>
          <div>Searching...</div>
        </main>
      );
    }
    if (planets && planets.length > 0) {
      return (
        <main className="main">
          <h2>Planet Data:</h2>
          <div className="planets-data">
            {planets.map((planet, index) => (
              <PlanetCard key={index} planet={planet} />
            ))}
          </div>
        </main>
      );
    }
    return (
      <main className="main">
        <h2>Planet Data:</h2>
        <div>Not Found</div>
      </main>
    );
  }
}

export default Content;
