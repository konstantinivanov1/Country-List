import axios from "axios";

const API_KEY = '040b2ccb11mshdd9269320e63c3ap18f14bjsn0115e4babbd6';
const BASE_URL = 'https://restcountries.com/v3.1';

const apiService = axios.create({
    baseURL: BASE_URL,

})


const fetchAllCountries = async () => {
    try {
        const response = await apiService.get('/all',{
            params:{
                fields: 'name,flags,region',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching countries:', error.message);
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
}

const fetchSingleCountry = async (currentCountry) => {
    try{
        const response = await apiService.get("/name/" + currentCountry);
        return response.data
    } catch (error) {
        console.error("Error fetching single country:", error)
    }
}


export { fetchAllCountries, fetchSingleCountry };