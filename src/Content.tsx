import { Component } from 'react';
import BeerCard from './BeerCard';
import Image404 from '../public/404.jpg';

interface ContentProps {
  beers: Array<{ name: string; image_url: string; tagline: string }> | null;
  isButtonDisabled: boolean;
}

class Content extends Component<ContentProps> {
  render() {
    const { beers, isButtonDisabled } = this.props;
    if (isButtonDisabled) {
      return (
        <main className="main">
          <div>Searching...</div>
        </main>
      );
    }
    if (beers && beers.length > 0) {
      return (
        <main className="main">
          <div className="beers-data">
            {beers.map((beer, index) => (
              <BeerCard key={index} beer={beer} />
            ))}
          </div>
        </main>
      );
    }
    return (
      <main className="main">
        <img className="img-error-404" src={Image404} alt="Error 404" />
        <h2>Error 404</h2>
        <div>Beer not found</div>
      </main>
    );
  }
}

export default Content;
