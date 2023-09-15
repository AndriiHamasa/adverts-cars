// import CAR_CONSTANT_LIST from "./constantsForLocalStorage";


const saveDataToLocalStorage = (data) => {
  try {
    // console.log('data', data)
    console.log('data.type', data.type)
    const serializedData = JSON.stringify(data.payload);
    localStorage.setItem([data.type], serializedData);
  } catch (error) {
    console.error("Error saving data to localStorage:", error);
  }
};

export default saveDataToLocalStorage
