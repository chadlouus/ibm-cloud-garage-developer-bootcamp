import {REGULAR, NEW_RELEASE, CHILDRENS} from './movie-codes';


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
        let subTotal = 0;
        let rental = rentals[i];
        subTotal = rental.amountFor(subTotal);

        // add frequent renter points
        frequentRenterPoints++;

        // add bonus for a two day new release rental
        if ((rental.movie.priceCode === NEW_RELEASE) &&
            rental.daysRented > 1) frequentRenterPoints++;

        //show figures for this rental
        statement += '\t' + rental.movie.title + '\t' + subTotal.toString(10) + '\n';

        total += subTotal;
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
