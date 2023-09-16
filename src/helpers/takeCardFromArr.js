const takeCardFromArr = (page, arr) => {
  let countOfElements = 8 * page
  if (page === 2) {
    countOfElements = arr.length
  }
  
  const arrToModify = [...arr]

  arrToModify.splice(countOfElements)
  return arrToModify
};

export default takeCardFromArr