
let makeRentalFrom = (movie, daysRented) => {
  const getCharge = () => {
    return movie.getCharge(daysRented);
  }

  return {
    get movie() { return movie; },
    get daysRented() { return daysRented; },
    getCharge,
    getFrequentRenterPoints() {
      return movie.getFrequentRenterPoints(daysRented);
    }
  };
};

export {makeRentalFrom};
