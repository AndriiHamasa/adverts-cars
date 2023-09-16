import instance from "../shared/api/instance";

async function fetchData(params) {
  try {
    const response = await instance.get("/adverts", {
      params,
    });
    return response?.data;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchData;
