import axios from 'axios'

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_V = process.env.NEXT_PUBLIC_API_V;

export async function getHome() {
    const ENDPOINT = 'home';
    const response = await axios.get(`${ROOT_API}/${API_V}/${ENDPOINT}`);

    const axiosResponse = response.data

    return axiosResponse.data
}

export async function getCatalogueDetail(id: string) {
    const ENDPOINT = `catalogue/${id}/detail`;
    const response = await axios.get(`${ROOT_API}/${API_V}/${ENDPOINT}`);

    const axiosResponse = response.data

    return axiosResponse
}

export async function getCatalogueByCategory(keyParams: string, valueParams: string) {
    let params = ''
    if(keyParams === 'search') {
        if(valueParams === '') {
            params = ''    
        } else {
            params = `?search=${valueParams}`
        }
    } else if(keyParams === 'id') {
        if(valueParams === 'all') {
            params = ''
        } else {
            params = `?id=${valueParams}`
        }
    } else {
        params = ''
    }

    const ENDPOINT = `catalogues${params}`;
    const response = await axios.get(`${ROOT_API}/${API_V}/${ENDPOINT}`);

    const axiosResponse = response.data

    return axiosResponse
}

export async function getCatalogueIds() {
    
    const ENDPOINT = `catalogueids`;
    const response = await axios.get(`${ROOT_API}/${API_V}/${ENDPOINT}`);

    const axiosResponse = response.data
    console.log("RESPONSE : ", axiosResponse)

    return axiosResponse
}

export async function getCountryCities() {
    
    const ENDPOINT = `countrystates`;
    const response = await axios.get(`${ROOT_API}/${API_V}/${ENDPOINT}`);

    const axiosResponse = response.data

    return axiosResponse
}

export async function createCheckout(payloads: string) {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    
    const ENDPOINT = `checkout`;
    const response = await axios.post(`${ROOT_API}/${API_V}/${ENDPOINT}`, payloads, config);

    const axiosResponse = response.data


    return axiosResponse
}

export async function createMessage(payloads: string) {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    
    const ENDPOINT = `message`;
    const response = await axios.post(`${ROOT_API}/${API_V}/${ENDPOINT}`, payloads, config);

    const axiosResponse = response.data


    return axiosResponse
}