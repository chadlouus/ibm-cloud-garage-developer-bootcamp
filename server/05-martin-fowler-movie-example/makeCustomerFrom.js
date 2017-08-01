import {REGULAR, NEW_RELEASE, CHILDRENS} from './movie-codes';


function getFrequentRenterPoints(rental) {
  // add bonus for a two day new release rental
  if((rental.movie.priceCode === NEW_RELEASE) && rental.daysRented > 1) return 2;
  return 1;
}

let makeCustomerFrom = (name) => {
  let rentals = [];

  return {
    get name() { return name; },
    addRental(rental) { rentals.push(rental); },

    statement() {
      let total = 0;
      let frequentRenterPoints = 0;
      let statement = 'Rental Record for ' + name + '\n';

      for (let i = 0; i < rentals.length; i++) {
        let rental = rentals[i];
        frequentRenterPoints += getFrequentRenterPoints(rental);

        //show figures for this rental
        statement += '\t' + rental.movie.title + '\t' + rental.getCharge().toString(10) + '\n';

        total += rental.getCharge();
      }

      //add footer lines
      statement += 'Amount owed is ' + total.toString(10) + '\n';
      statement += 'You earned ' + String(frequentRenterPoints) +
          ' frequent renter points';

      return statement;
    }
  };
};

export {makeCustomerFrom};
