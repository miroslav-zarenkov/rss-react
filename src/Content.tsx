import BeerCard from './BeerCard';
import Paginator from './Paginator';
import SelectPages from './SelectPages';
import Image404 from './assets/images/404.jpg';

interface ContentProps {
  beers: Array<{ name: string; image_url: string; tagline: string }> | null;
  isButtonDisabled: boolean;
  handleCardsPerPageChange: (string: string) => void;
}

function Content({
  beers,
  isButtonDisabled,
  handleCardsPerPageChange,
}: ContentProps) {
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
        <SelectPages handleCardsPerPageChange={handleCardsPerPageChange} />
        <div className="beers-data">
          {beers.map((beer, index) => (
            <BeerCard key={index} beer={beer} />
          ))}
        </div>
        <Paginator />
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

export default Content;
