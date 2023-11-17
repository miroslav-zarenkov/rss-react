const BASE_URL = 'https://dummyjson.com/products';

const fetchData = async (page = '1', cardsPerPage = '5', inputValue = '') => {
  const skip = (parseInt(page, 10) - 1) * parseInt(cardsPerPage, 10);
  const trimmedValue = inputValue.trim();
  const url = trimmedValue
    ? `${BASE_URL}/search?q=${trimmedValue}&limit=${cardsPerPage}&skip=${skip}`
    : `${BASE_URL}?limit=${cardsPerPage}&skip=${skip}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    const fetchedProducts = await response.json();
    return fetchedProducts;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default fetchData;
