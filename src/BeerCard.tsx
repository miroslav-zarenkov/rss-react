import { Component } from 'react';
import PlaceholderBeer from './assets/images/placeholder_beer.png';

interface BeerCardProps {
  beer: { name: string; image_url: string; tagline: string };
}

class BeerCard extends Component<BeerCardProps> {
  render() {
    const { beer } = this.props;
    return (
      <div className="beer-card">
        <h3>{beer.name}</h3>
        {beer.image_url ? (
          <img src={beer.image_url} alt={beer.name} />
        ) : (
          <img src={PlaceholderBeer} alt="Placeholder Beer" />
        )}
        <div>{beer.tagline}</div>
      </div>
    );
  }
}

export default BeerCard;
