import {REGULAR, NEW_RELEASE, CHILDRENS} from './movie-codes';

const moviePriceCodes = {};
moviePriceCodes[REGULAR] =  (daysRented) => {
    let total = 2;
    if (daysRented > 2) {
      total += (daysRented - 2) * 1.5;
    }
    return total;
};

moviePriceCodes[NEW_RELEASE] =  (daysRented) => {
  return daysRented * 3;
};

moviePriceCodes[CHILDRENS] =  (daysRented) => {
  let total = 1.5;
  if(daysRented > 3) {
    total += (daysRented - 3) * 1.5;
  }
  return total;
};

let makeMovieFrom = (title, somePriceCode) => {
  let priceCode = somePriceCode;

  return {
    get title() { return title; },
    get priceCode() { return priceCode; },
    set priceCode(code) { priceCode = code; },
    getFrequentRenterPoints(daysRented) {
      if ((priceCode === NEW_RELEASE) && daysRented > 1) return 2;
      return 1;
    },
    getCharge(daysRented) {
      let total = 0;

      const moviePriceCode = moviePriceCodes[priceCode];
      console.log('movie price code is', priceCode, moviePriceCode);
      if (moviePriceCode) {
        total += moviePriceCode(daysRented);
      }
      return total;
    }
  };
};

export {makeMovieFrom};
