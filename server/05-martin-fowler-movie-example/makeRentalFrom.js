import {REGULAR, NEW_RELEASE, CHILDRENS} from './movie-codes';

let makeRentalFrom = (movie, daysRented) => {
  const getCharge = () => {
    let total = 0;
    //noinspection Eslint
    let rental = this;
    switch(movie.priceCode) {
      case REGULAR:

        total += 2;
        if(daysRented > 2) {
          total += (daysRented - 2) * 1.5;
        }
        break;

      case NEW_RELEASE:

        total += daysRented * 3;
        break;

      case CHILDRENS:

        total += 1.5;
        if(daysRented > 3) {
          total += (daysRented - 3) * 1.5;
        }

        break;
      default:

    }
    return total;
  }

  return {
    get movie() { return movie; },
    get daysRented() { return daysRented; },
    getCharge
  };
};

export {makeRentalFrom};
