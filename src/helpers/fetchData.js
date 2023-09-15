import instance from "../shared/api/instance";

async function fetchData(params) {
    console.log("зашли в фетчДата")
    console.log('params', params)

    try {
        const response = await instance.get("/adverts", {
            params
        });
        console.log(response?.data)
        return response?.data
    } catch (error) {
        console.log(error.message)
    }
}

export default fetchData