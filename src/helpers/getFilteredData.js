const getFilteredData = (data, arr) => {
  let response = [...arr];

  data.forEach((property) => {
    const key = Object.keys(property)[0];
    if (key === "make") {
      const filteredArr = response.filter(
        (car) => car.make.toLowerCase() === property[key].toLowerCase()
      );

      if (filteredArr.length === 0) {
        response = [];
        return;
      }

      response = [...filteredArr];
    }
    if (key === "rentalPrice") {
      const filteredArr = response.filter(
        (car) => car.rentalPrice === property[key]
      );
      if (filteredArr.length === 0) {
        response = [];
        return;
      }
      response = [...filteredArr];
    }
    if (key === "mileageFrom") {
      const filteredArr = response.filter(
        (car) => car.mileage >= property[key]
      );
      if (filteredArr.length === 0) {
        response = [];
        return;
      }
      response = [...filteredArr];
    }
    if (key === "mileageTo") {
      const filteredArr = response.filter(
        (car) => car.mileage <= property[key]
      );
      if (filteredArr.length === 0) {
        response = [];
        return;
      }
      response = [...filteredArr];
    }
  });

  return response;
};

export default getFilteredData;
