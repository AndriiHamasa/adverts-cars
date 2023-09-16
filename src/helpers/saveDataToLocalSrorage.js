


const saveDataToLocalStorage = (data) => {
  try {
    const serializedData = JSON.stringify(data.payload);
    localStorage.setItem([data.type], serializedData);
  } catch (error) {
    console.error("Error saving data to localStorage:", error);
  }
};

export default saveDataToLocalStorage
