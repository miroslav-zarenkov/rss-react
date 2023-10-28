import { Component } from 'react';

interface PlanetCardProps {
  planet: { name: string; climate: string; population: string };
}

class PlanetCard extends Component<PlanetCardProps> {
  render() {
    const { planet } = this.props;
    return (
      <div className="planet-card">
        <h3>Name: {planet.name}</h3>
        <p>Climate: {planet.climate}</p>
        <p>Population: {planet.population}</p>
      </div>
    );
  }
}

export default PlanetCard;
